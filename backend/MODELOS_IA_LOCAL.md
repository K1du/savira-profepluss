# Guía paso a paso: Descargar, configurar y usar modelos IA en local

Esta guía te ayudará a instalar y usar los modelos de IA open source necesarios para ProfePluss en tu entorno local, sin depender de APIs externas.

---

## 1. Requisitos previos
- Python 3.9 o superior
- pip actualizado
- Git
- Espacio suficiente en disco (al menos 10GB libres para modelos grandes)

## 2. Crear y activar entorno virtual
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

## 3. Instalar dependencias
```bash
pip install -r requirements.txt
```

## 4. Descargar modelos Hugging Face (T5, GPT-Neo, BERT)
Ejemplo para T5-base:
```python
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
model_name = "t5-base"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
```
Esto descargará el modelo y lo almacenará en `~/.cache/huggingface/transformers`.

Repite el proceso para `EleutherAI/gpt-neo-1.3B` y `bert-base-uncased`.

## 5. Descargar modelo Vosk (Speech-to-Text)
```bash
pip install vosk
```
Descarga el modelo español (o el idioma que necesites) desde: https://alphacephei.com/vosk/models
Descomprime el modelo en una carpeta accesible (por ejemplo, `ia_models/vosk-es`)

## 6. Descargar modelo Coqui TTS (Text-to-Speech)
```bash
pip install TTS
```
Ejemplo de uso:
```python
from TTS.api import TTS
# Listar modelos disponibles
tts = TTS()
print(tts.list_models())
# Descargar y usar modelo español
tts = TTS(model_name="tts_models/es/mai/tacotron2-DDC")
tts.tts_to_file(text="Hola, esto es una prueba.", file_path="output.wav")
```

## 7. Integración en el backend
- Crea una carpeta `ia_models/` y guarda los modelos descargados ahí para fácil acceso.
- Usa rutas absolutas o variables de entorno para apuntar a los modelos en producción.
- Consulta los ejemplos de la documentación oficial de cada librería para integración avanzada.

---

## Recursos útiles
- [Transformers (Hugging Face) Docs](https://huggingface.co/docs/transformers/)
- [Vosk Speech Recognition](https://alphacephei.com/vosk/)
- [Coqui TTS Docs](https://tts.readthedocs.io/en/latest/)

---

¿Dudas? Consulta este documento o pregunta al responsable técnico.
