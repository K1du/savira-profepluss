# ProfePluss – Plataforma Educativa con IA (MVP)

## ¿Qué es este proyecto?
ProfePluss es una plataforma educativa moderna, minimalista y multilingüe, diseñada para facilitar el estudio y la colaboración entre estudiantes, usando inteligencia artificial open source y tecnologías web actuales. Este README contiene el roadmap, la estructura del proyecto y las instrucciones para todos los departamentos implicados.

---

## Roadmap General (Fases y Responsables)

### Fase 1: MVP Local (Web Responsive)
1. **Diseño UI/UX**  
   - Wireframes y prototipos visuales (diseño minimalista, inspirado en el logo `profe-_1.ico`).
   - Definir paleta de colores y tipografía.
   - Responsable: Diseño

2. **Frontend**  
   - Crear interfaz con React y Tailwind CSS.
   - Implementar internacionalización (i18next).
   - Zona de registro/login, panel usuario, upload de documentos (drag & drop), chatbot, visualización de flashcards/quizzes.
   - Responsive para escritorio, tablet y móvil.
   - Responsable: Frontend

3. **Backend**  
   - Django + Django REST Framework.
   - Endpoints para usuarios, documentos, flashcards, quizzes, chatbot.
   - Autenticación, subida de archivos, almacenamiento local.
   - Responsable: Backend

4. **IA Local**  
   - Integrar modelos Hugging Face descargados (T5/GPT-Neo/BERT) para generación de flashcards, preguntas y chatbot.
   - Integrar Vosk para reconocimiento de voz y Coqui TTS para síntesis de voz.
   - Responsable: IA/ML

5. **QA y Testing**  
   - Pruebas funcionales, de usabilidad y seguridad.
   - Documentar bugs y mejoras.
   - Responsable: QA

6. **Documentación y Soporte**  
   - Manuales de usuario, videotutoriales básicos.
   - Responsable: Documentación

---

### Fase 2: Expansión
- Métodos de pago (Stripe, PayPal, Bizum)
- Subscripción avanzada (Pro, Colaborativo)
- Videollamada y pizarra colaborativa
- Integración con servicios externos (Google Drive, Dropbox, OneDrive)
- App móvil (Flutter/React Native)
- Migración a hosting/producción

---

## Estructura del Proyecto

```
ProfePluss/
├── backend/                # Django + DRF
│   ├── manage.py
│   ├── profepluss/        # Configuración Django
│   └── ...
├── frontend/               # React + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   ├── public/
│   └── ...
├── ia_models/              # Modelos IA locales (T5, GPT-Neo, BERT, Vosk, Coqui)
├── wireframes/             # Imágenes de wireframes y prototipos
├── libros_demo/            # Libros y documentos de prueba
├── README.md
└── ...
```

---

## Flujo de Trabajo Recomendado
1. **Diseño:**
   - Crear wireframes y prototipos visuales (ver carpeta `/wireframes`).
   - Definir estilo visual basado en el logo y tendencias actuales.
2. **Frontend:**
   - Montar estructura React y Tailwind.
   - Implementar internacionalización (i18next) y componentes básicos.
   - Integrar zona de upload (drag & drop) y chatbot.
3. **Backend:**
   - Configurar Django, endpoints REST, autenticación y subida de archivos.
   - Preparar integración con modelos IA locales.
4. **IA/ML:**
   - Descargar e integrar modelos open source.
   - Probar generación de flashcards, preguntas y chatbot en local.
   - Añadir reconocimiento y síntesis de voz.
5. **QA:**
   - Testear todas las funciones en local, documentar errores y mejoras.
6. **Documentación:**
   - Crear manuales y videotutoriales para usuarios y desarrolladores.

---

## Tecnologías y Herramientas
- **Frontend:** React, Tailwind CSS, i18next
- **Backend:** Django, Django REST Framework
- **IA/ML:** Hugging Face Transformers (T5, GPT-Neo, BERT), Vosk, Coqui TTS
- **Base de datos:** SQLite (desarrollo)
- **Upload:** React Dropzone, Django File Upload
- **Internacionalización:** i18next (frontend), Django i18n (backend)

---

## Notas Importantes
- Todo el desarrollo y pruebas serán en local hasta la migración a producción.
- El sistema será multilingüe desde el inicio, detectando el idioma del usuario automáticamente.
- El diseño será minimalista y moderno, centrado en la experiencia de usuario.
- El código será privado.

---

## ¿Qué es un wireframe?
Un wireframe es un esquema visual simple de una pantalla de la aplicación. Sirve para mostrar la estructura, los elementos principales y el flujo de usuario, sin detalles de diseño ni colores. Ayuda a todos los departamentos a entender cómo será la app antes de programar nada.

¡Consulta la carpeta `/wireframes` para ver ejemplos visuales!

---

## Contacto y gestión
- Para dudas, sugerencias o gestión de tareas, contactar al responsable de proyecto.
- Usa este README como guía y referencia para todo el equipo.

---

**¡Vamos a crear una plataforma educativa innovadora y accesible para todos!**
