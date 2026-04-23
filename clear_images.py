import json

with open('content/blog-posts.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data:
    item['img'] = "" # Clear the image path to force the API to fetch og:image

with open('content/blog-posts.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print(f"Cleared images for {len(data)} items. The API will now fetch original images from source sites.")
