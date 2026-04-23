import json
import urllib.request
import re
from concurrent.futures import ThreadPoolExecutor

def fetch_og_image(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (compatible; Misiones-Bot/1.0)'})
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            match = re.search(r'<meta[^>]+(?:property="og:image"|name="og:image")[^>]+content="([^"]+)"', html, re.I)
            if not match:
                match = re.search(r'<meta[^>]+content="([^"]+)"[^>]+(?:property="og:image"|name="og:image")', html, re.I)
            return match.group(1) if match else None
    except Exception as e:
        # print(f"Error fetching {url}: {e}")
        return None

def update_item(item):
    url = item.get('url')
    # If the image is currently a fallback or generic one, or missing
    img = item.get('img', '')
    if url and url.startswith('http'):
        og_image = fetch_og_image(url)
        if og_image:
            item['img'] = og_image
            return True
    return False

with open('content/blog-posts.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Updating {len(data)} items...")

with ThreadPoolExecutor(max_workers=5) as executor:
    results = list(executor.map(update_item, data))

updated_count = sum(1 for r in results if r)

with open('content/blog-posts.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print(f"Successfully restored {updated_count} original images from source sites.")
