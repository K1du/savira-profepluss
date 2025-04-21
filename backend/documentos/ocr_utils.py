# OCR utils using Tesseract (pytesseract)
import pytesseract
from PIL import Image
import tempfile
import os

def ocr_from_imagefile(file):
    # file: Django InMemoryUploadedFile or File object
    with tempfile.NamedTemporaryFile(delete=False, suffix='.png') as tmp:
        for chunk in file.chunks():
            tmp.write(chunk)
        tmp_path = tmp.name
    try:
        img = Image.open(tmp_path)
        text = pytesseract.image_to_string(img, lang='spa+eng')
    finally:
        os.remove(tmp_path)
    return text

# Uso:
# texto = ocr_from_imagefile(request.FILES['archivo'])
