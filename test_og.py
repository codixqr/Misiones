import urllib.request
import re

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
        return str(e)

test_urls = [
    "https://gmtourism.com/nevzat-celebi-oda-degil-erisilebilirlik-satiyoruz",
    "https://otelpostasi.com/kose-yazisi/otelcilikte-markanin-derin-anlami-ve-gucu"
]

for url in test_urls:
    print(f"URL: {url}\nOG Image: {fetch_og_image(url)}\n")
