import urllib.request
import re

def test_fetch(url, ua):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': ua})
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            match = re.search(r'<meta[^>]+(?:property="og:image"|name="og:image")[^>]+content="([^"]+)"', html, re.I)
            return match.group(1) if match else "No OG Image found"
    except Exception as e:
        return str(e)

url = "https://gmtourism.com/nevzat-celebi-otelcilikte-surdurulebilirligin-ince-detaylari"
uas = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "facebookexternalhit/1.1",
    "Twitterbot/1.0",
    "Googlebot/2.1 (+http://www.google.com/bot.html)"
]

for ua in uas:
    print(f"UA: {ua}\nResult: {test_fetch(url, ua)}\n")
