import os
from PIL import Image

def process_png(file_path):
    print(f"Processing {file_path}...")
    img = Image.open(file_path)
    img = img.convert("RGBA")
    
    # Simple background removal if it's white or nearly white
    # In some cases, logos have a white background that should be transparent
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # If the pixel is very close to white, make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    
    img.putdata(new_data)
    img.save(file_path, "PNG")
    print(f"Successfully processed {file_path}")

partners_dir = "/Users/jinsookim/programming/dongkyun/promotion/images/partners"
png_files = ["hyundai_department_store.png", "seoul_metropolitan_government.png"]

for filename in png_files:
    path = os.path.join(partners_dir, filename)
    if os.path.exists(path):
        process_png(path)
    else:
        print(f"File not found: {path}")
