# Utilidades para integración IA open source (HuggingFace)
from transformers import pipeline, AutoTokenizer, AutoModelForSeq2SeqLM
import os

# Inicialización perezosa para evitar recarga innecesaria
_summarizer = None
_qg_pipeline = None
_explainer_pipeline = None

def get_summarizer():
    global _summarizer
    if _summarizer is None:
        _summarizer = pipeline('summarization', model='facebook/bart-large-cnn')
    return _summarizer

# NUEVO: Inicializador para generación de preguntas (QG)
def get_qg_pipeline():
    global _qg_pipeline
    if _qg_pipeline is None:
        # Descarga automática si no está
        _qg_pipeline = pipeline('text2text-generation', model='valhalla/t5-base-e2e-qg')
    return _qg_pipeline

# NUEVO: Inicializador para explicación IA (usamos el mismo modelo T5 para simplicity)
def get_explainer_pipeline():
    global _explainer_pipeline
    if _explainer_pipeline is None:
        _explainer_pipeline = pipeline('text2text-generation', model='google/flan-t5-base')
    return _explainer_pipeline

# Generador de tests tipo opción múltiple con explicación IA
def generar_test_opcion_multiple(texto, num_preguntas=5):
    qg = get_qg_pipeline()
    explainer = get_explainer_pipeline()
    preguntas = []
    # Generar preguntas (prompt específico para el modelo QG)
    qg_input = f"generate {num_preguntas} questions with 4 options each from the following text: {texto}"
    qg_output = qg(qg_input, max_length=256, do_sample=False)
    # El modelo devuelve todo el test en un string, parseamos
    raw = qg_output[0]['generated_text']
    # Ejemplo de parseo simple (puede requerir ajuste según el modelo)
    bloques = raw.split('Q')
    for bloque in bloques:
        if not bloque.strip(): continue
        lines = bloque.strip().split('\n')
        pregunta = lines[0].strip(': ').strip()
        opciones = [l.strip('- ').strip() for l in lines[1:5] if l.strip()]
        correcta = opciones[0] if opciones else ''
        # Explicación IA
        contexto = f"Texto: {texto}\nPregunta: {pregunta}\nRespuesta: {correcta}\nExplica por qué esta respuesta es correcta."
        explicacion = explainer(contexto, max_length=128, do_sample=False)[0]['generated_text']
        preguntas.append({
            'pregunta': pregunta,
            'opciones': opciones,
            'respuesta_correcta': correcta,
            'explicacion': explicacion
        })
    return preguntas

def resumir_texto(texto, max_length=130, min_length=30):
    summarizer = get_summarizer()
    resumen = summarizer(texto, max_length=max_length, min_length=min_length, do_sample=False)
    return resumen[0]['summary_text']

# Ejemplo de uso:
# tests = generar_test_opcion_multiple("Texto largo a procesar...")
# resumen = resumir_texto("Texto largo a resumir...")
