import requests
from bs4 import BeautifulSoup
import json
import os
import re
import sys
from datetime import datetime
from urllib.parse import urljoin

# Fix encoding for Windows console
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

DATE_PATTERN = re.compile(r'\d{1,2}\s+(?:Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık)\s+\d{4}')
DATE_PATTERN_NUMERIC = re.compile(r'\d{1,2}/\d{1,2}/\d{4}')

# Configuration
SOURCES = [
    {
        "name": "Otel Postası",
        "list_url": "https://otelpostasi.com/yazar/?id=1107",
        "link_pattern": "/kose-yazisi/",
        "base_url": "https://otelpostasi.com",
        "cat": "Köşe Yazısı"
    },
    {
        "name": "GM Tourism",
        "list_url": "https://gmtourism.com/search?search=nevzat",
        "link_pattern": "nevzat-", # Filters for articles with 'nevzat' in the slug
        "base_url": "https://gmtourism.com",
        "cat": "Turizm Haberleri"
    }
]

IMAGE_DIR = "public/images/blog"
DATA_FILE = "content/blog-posts.json"
SEEN_FILE = "scripts/seen_articles.json"
EXPORT_ALL = False # Set to True to re-scrape everything

def download_image(url, filename):
    if not url:
        return None
    
    # Ensure full URL
    if url.startswith('//'):
        url = 'https:' + url
    
    try:
        response = requests.get(url, stream=True, timeout=10)
        if response.status_code == 200:
            os.makedirs(os.path.dirname(filename), exist_ok=True)
            with open(filename, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            return True
    except Exception as e:
        print(f"Error downloading image {url}: {e}")
    return False

def get_article_data(url, source_config):
    try:
        response = requests.get(url, timeout=15)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        title = ""
        # Try multiple title selectors
        title_tag = soup.find('h1') or soup.find('h2', class_='post-title')
        if title_tag:
            title = title_tag.get_text().strip()
        else:
            title_tag = soup.find('meta', property='og:title')
            if title_tag:
                title = title_tag['content'].split('|')[0].strip()

        content_div = soup.find('div', class_='post-content') or soup.find('div', class_='entry-content') or soup.find('div', class_='post-cont')
        description = ""
        if content_div:
            # Extract first few paragraphs for description
            paras = content_div.find_all('p')
            for p in paras:
                text = p.get_text().strip()
                if len(text) > 50:
                    description = text[:200] + "..."
                    break
        
        if not description:
            desc_tag = soup.find('meta', property='og:description')
            if desc_tag:
                description = desc_tag['content'][:200] + "..."

        img_url = None
        # Try og:image first but ignore if it's the site logo
        og_tag = soup.find('meta', property='og:image')
        if og_tag and "logo" not in og_tag['content'].lower():
            img_url = og_tag['content']
            
        if not img_url:
            # Look for images that look like article images
            all_imgs = soup.find_all('img')
            for img in all_imgs:
                src = img.get('src') or img.get('data-src')
                if src and ("yazi" in src.lower() or "uploads/20" in src.lower() or "digitaloceanspaces" in src.lower()):
                    if "logo" not in src.lower():
                        img_url = src
                        break
        
        # Last resort fallback
        if not img_url:
            img_tag = soup.find('meta', property='og:image')
            if img_tag:
                img_url = img_tag['content']

        # Try to find date in specific content elements first to avoid header/sidebar dates
        content_area = soup.find('div', class_='post-cont') or soup.find('div', class_='post-content') or soup.find('div', class_='entry-content') or soup.find('div', class_='article-post') or soup
        date_tag = content_area.find('ul', class_='post-tags') or content_area.find('div', class_='post-date') or content_area.find('span', class_='date')
        
        date_text = ""

        if date_tag:
            tag_text = date_tag.get_text()
            match = DATE_PATTERN.search(tag_text) or DATE_PATTERN_NUMERIC.search(tag_text)
            if match:
                date_text = match.group(0)
        
        if not date_text:
            # Look for spans with numeric dates
            for span in content_area.find_all('span'):
                span_text = span.get_text().strip()
                match = DATE_PATTERN_NUMERIC.search(span_text)
                if match:
                    date_text = match.group(0)
                    break

        if not date_text:
            # Fallback to general search but skip the very top of the page (header)
            page_text = soup.get_text()
            # Find title first and search after it
            title_idx = page_text.find(title) if title else 0
            search_text = page_text[title_idx:] if title_idx != -1 else page_text
            
            # Avoid picking up header date (which is usually today's date in Turkish)
            # Try to find the numeric pattern first as it's more specific to GM article dates
            match = DATE_PATTERN_NUMERIC.search(search_text) or DATE_PATTERN.search(search_text)
            if match:
                date_text = match.group(0)
        
        if not date_text:
            date_text = datetime.now().strftime("%d %B %Y")
            print(f"Warning: Could not find date for {url}, using today's date.")

        return {
            "title": title,
            "description": description,
            "date": date_text,
            "img_url": img_url,
            "cat": source_config.get("cat", "Blog")
        }
    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return None

def slugify(text):
    text = text.lower()
    text = text.replace('ı', 'i').replace('ğ', 'g').replace('ü', 'u').replace('ş', 's').replace('ö', 'o').replace('ç', 'c')
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def main():
    # Change to script directory to find relative files
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    seen_articles = {}
    if os.path.exists(SEEN_FILE) and not EXPORT_ALL:
        try:
            with open(SEEN_FILE, 'r', encoding='utf-8') as f:
                seen_articles = json.load(f)
                if isinstance(seen_articles, list):
                    # Convert list to dict if needed
                    seen_articles = {url: True for url in seen_articles}
        except:
            pass

    existing_posts = []
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, 'r', encoding='utf-8') as f:
                existing_posts = json.load(f)
        except:
            pass

    new_posts_found = 0
    
    for source in SOURCES:
        print(f"Checking source: {source['name']}")
        try:
            response = requests.get(source['list_url'], timeout=15)
            soup = BeautifulSoup(response.content, 'html.parser')
            
            links = []
            for a in soup.find_all('a', href=True):
                href = a['href']
                if source['link_pattern'] in href:
                    full_url = urljoin(source['base_url'], href)
                    if full_url not in seen_articles and full_url not in [p['url'] for p in existing_posts]:
                        if full_url not in [l[0] for l in links]:
                            # Try to find a date near this link
                            list_date = None
                            # Check parents and siblings
                            search_area = a.find_parent(['div', 'article', 'li', 'header'])
                            if search_area:
                                # Try to find a date inside post-tags or a span near the link
                                date_el = search_area.find('ul', class_='post-tags') or search_area.find('span', class_='date')
                                if date_el:
                                    text = date_el.get_text()
                                    date_match = DATE_PATTERN_NUMERIC.search(text) or DATE_PATTERN.search(text)
                                    if date_match:
                                        list_date = date_match.group(0)
                                
                                if not list_date:
                                    # Fallback to general search in the parent container
                                    container = search_area.find_parent(['div', 'article']) or search_area
                                    text = container.get_text()
                                    date_match = DATE_PATTERN_NUMERIC.search(text) or DATE_PATTERN.search(text)
                                    if date_match:
                                        list_date = date_match.group(0)
                            
                            links.append((full_url, a.get_text().strip(), list_date))

            for url, link_text, list_date in reversed(links):
                print(f"New article found: {url} (List Date: {list_date})")
                data = get_article_data(url, source)
                if data and data['title']:
                    # Use date from list if found, otherwise from article page
                    article_date = list_date if list_date else data['date']
                    post_id = slugify(data['title'])
                    
                    # Local image path
                    img_ext = "png"
                    if data['img_url']:
                        if '.jpg' in data['img_url'].lower() or '.jpeg' in data['img_url'].lower():
                            img_ext = "jpg"
                        elif '.webp' in data['img_url'].lower():
                            img_ext = "webp"

                    local_img_name = f"blog-{datetime.now().strftime('%Y%m%d')}-{post_id}.{img_ext}"
                    local_img_path = os.path.join(IMAGE_DIR, local_img_name)
                    
                    if download_image(data['img_url'], local_img_path):
                        img_path = f"/images/blog/{local_img_name}"
                    else:
                        img_path = "/images/blog/blog-details.jpg" # Fallback

                    new_post = {
                        "id": post_id,
                        "title": data['title'],
                        "description": data['description'],
                        "date": article_date,
                        "url": url,
                        "source": source['name'],
                        "cat": data['cat'],
                        "img": img_path
                    }
                    
                    existing_posts.insert(0, new_post)
                    seen_articles[url] = data['date']
                    new_posts_found += 1

        except Exception as e:
            print(f"Error checking source {source['name']}: {e}")

    if new_posts_found > 0:
        # Save updated data
        os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
        with open(DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump(existing_posts, f, indent=4, ensure_ascii=False)
        
        os.makedirs(os.path.dirname(SEEN_FILE), exist_ok=True)
        with open(SEEN_FILE, 'w', encoding='utf-8') as f:
            json.dump(seen_articles, f, indent=4, ensure_ascii=False)
            
        print(f"Added {new_posts_found} new articles.")
    else:
        print("No new articles found.")

if __name__ == "__main__":
    main()
