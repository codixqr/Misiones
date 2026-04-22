import requests
from bs4 import BeautifulSoup
import json
import os
import re
from datetime import datetime, timedelta

# Configuration
AUTHOR_ID = "1107"
BASE_URL = "https://otelpostasi.com"
# When running in GitHub Actions, paths should be relative to the repo root
DATA_FILE = "content/blog-posts.json"
IMAGE_DIR = "public/images/blog"
SEEN_FILE = "scripts/seen_articles.json"

MONTHS_TR = {
    "Ocak": 1, "Şubat": 2, "Mart": 3, "Nisan": 4, "Mayıs": 5, "Haziran": 6,
    "Temmuz": 7, "Ağustos": 8, "Eylül": 9, "Ekim": 10, "Kasım": 11, "Aralık": 12
}

def parse_tr_date(date_str):
    if not date_str: return None
    try:
        parts = date_str.split()
        if len(parts) == 3:
            day = int(parts[0])
            month = MONTHS_TR.get(parts[1], 1)
            year = int(parts[2])
            return datetime(year, month, day)
    except: pass
    return None

def download_image(url, filename):
    try:
        if not url: return None
        if url.startswith('//'): url = 'https:' + url
        response = requests.get(url, stream=True, timeout=10)
        response.raise_for_status()
        
        ext = url.split('.')[-1].split('?')[0]
        if len(ext) > 4 or len(ext) < 3: ext = 'jpg'
        
        rel_path = f"blog-{datetime.now().strftime('%Y%m%d')}-{filename}.{ext}"
        full_path = os.path.join(IMAGE_DIR, rel_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        
        with open(full_path, 'wb') as f:
            for chunk in response.iter_content(1024):
                f.write(chunk)
        return f"/images/blog/{rel_path}"
    except Exception as e:
        print(f"Error downloading image {url}: {e}")
        return None

def get_article_data(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        h1s = soup.find_all('h1')
        title = h1s[1].text.strip() if len(h1s) > 1 else (h1s[0].text.strip() if h1s else "Untitled")
        
        content_div = soup.find('div', class_='post-content') or soup.find('div', class_='entry-content') or soup.find('article')
        
        content = ""
        description = ""
        if content_div:
            paragraphs = content_div.find_all('p')
            if paragraphs:
                description = paragraphs[0].text.strip()[:200] + "..."
                
            for elem in content_div.find_all(['p', 'h2', 'h3', 'h4', 'li']):
                text = elem.text.strip()
                if text:
                    if elem.name.startswith('h'):
                        content += f"\n### {text}\n\n"
                    elif elem.name == 'li':
                        content += f"- {text}\n"
                    else:
                        content += f"{text}\n\n"
        
        img_url = None
        img_tag = soup.find('meta', property='og:image')
        if img_tag:
            img_url = img_tag['content']
        if not img_url:
            img_tag = content_div.find('img') if content_div else None
            if img_tag:
                img_url = img_tag.get('src') or img_tag.get('data-src')

        date_text = ""
        date_pattern = re.compile(r'\d{1,2}\s+(?:Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık)\s+\d{4}')
        matches = date_pattern.findall(response.text)
        if matches:
            date_text = matches[0]
            
        return {
            "id": re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-'),
            "title": title,
            "description": description,
            "date": date_text,
            "url": url,
            "source": "Otel Postası",
            "cat": "Köşe Yazısı",
            "img_url": img_url
        }
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def main():
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    os.makedirs(os.path.dirname(SEEN_FILE), exist_ok=True)
    
    seen_articles = {}
    if os.path.exists(SEEN_FILE):
        with open(SEEN_FILE, 'r', encoding='utf-8') as f:
            seen_articles = json.load(f)
            
    existing_posts = []
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            existing_posts = json.load(f)

    print("Checking for new articles...")
    all_links = []
    page = 1
    while True:
        url = f"{BASE_URL}/yazar/?id={AUTHOR_ID}&paged={page}"
        response = requests.get(url)
        if response.status_code != 200: break
        
        soup = BeautifulSoup(response.text, 'html.parser')
        links = [a['href'] for a in soup.find_all('a', href=True) if '/kose-yazisi/' in a['href']]
        if not links: break
        
        for link in links:
            if link not in all_links:
                all_links.append(link)
        page += 1
        if page > 5: break # Safety limit

    new_count = 0
    for idx, link in enumerate(all_links):
        if link in seen_articles:
            continue
            
        print(f"New article found: {link}")
        data = get_article_data(link)
        if data:
            # Download image
            img_path = download_image(data['img_url'], f"{data['id']}")
            data['img'] = img_path
            del data['img_url'] # Cleanup
            
            existing_posts.insert(0, data)
            seen_articles[link] = data['date']
            new_count += 1

    if new_count > 0:
        # Keep it sorted by date (parsing date for sorting)
        existing_posts.sort(key=lambda x: parse_tr_date(x['date']) or datetime.min, reverse=True)
        
        with open(DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump(existing_posts, f, ensure_ascii=False, indent=4)
            
        with open(SEEN_FILE, 'w', encoding='utf-8') as f:
            json.dump(seen_articles, f, ensure_ascii=False, indent=4)
            
        print(f"Added {new_count} new articles.")
    else:
        print("No new articles.")

if __name__ == "__main__":
    main()
