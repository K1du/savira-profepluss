# ProfePluss – Plataforma Educativa con IA (MVP)

## ¿Qué es este proyecto?
ProfePluss es una plataforma educativa moderna, minimalista y multilingüe, diseñada para facilitar el estudio y la colaboración entre estudiantes, usando inteligencia artificial open source y tecnologías web actuales. Esta documentación está en español para usuarios y desarrolladores hispanohablantes.

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

## Inicio Rápido (Docker Compose)

### 1. Requisitos previos
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y ejecutándose.

### 2. Levantar todos los servicios
Desde la raíz del proyecto:
```sh
docker-compose up --build
```
- La primera ejecución puede tardar unos minutos.

### 3. Acceso a la plataforma
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

### 4. Usuarios por defecto
- **Usuario de prueba:**
  - Email: `testuser@profepluss.com`
  - Contraseña: `123456789`
- **Usuario admin:**
  - Email: `admin@profepluss.com`
  - Contraseña: `admin123456`

### 5. Comandos útiles
- Parar servicios: `docker-compose down`
- Reconstruir solo backend: `docker-compose build backend`

## Variables de entorno
- Backend: Ver `backend/profepluss/settings.py` para variables requeridas. Por defecto, todo está configurado para local Docker.
- Frontend: Usa proxy React para conectar con el backend (`proxy` en `package.json`).

## Funcionalidades principales
- Registro/login de usuarios (por email)
- Subida de documentos y resumen con IA
- Generación de tests tipo opción múltiple
- Notificaciones en la app y por email
- Panel de administración (Django)

## Contribuir
- El desarrollo principal es en español, pero se aceptan PRs/issues en inglés.
- Abre issues para bugs o nuevas funcionalidades.

## Licencia
MIT

---

## 🚀 Roadmap y Features Estratégicas

### MVP Actual
- Autenticación JWT, gestión de usuarios y perfiles.
- Gestión de documentos (subida, listado, borrado, descarga).
- Panel de usuario, login y registro en React.
- Estructura preparada para flashcards, quizzes, grupos y chatbot.
- Branding personalizado (favicon, logo).

### Ideas y Features Futuras

#### 1. Seguimiento Adaptativo de Progreso
- Ajusta recomendaciones de estudio según progreso, intereses y hábitos del usuario.
- Registro de interacciones y progreso (PostgreSQL/MongoDB).
- Algoritmos de recomendación (Collaborative/Content-Based Filtering con Scikit-learn/TensorFlow).
- Dashboards de progreso y sugerencias (Chart.js/D3.js).

#### 2. Biblioteca Colaborativa
- Espacio para compartir, comentar y calificar recursos educativos.
- Búsqueda avanzada (ElasticSearch/PostgreSQL), categorías y etiquetas.
- Extracción de texto de documentos (PyPDF2/Textract).
- Edición colaborativa (WebSockets/Redis).
- Análisis de sentimiento en comentarios (HuggingFace).
- Control de privacidad de recursos.

#### 3. Buenas Prácticas y Propuestas de Innovación
- Modularidad y microservicios (Docker).
- Accesibilidad (WCAG, alto contraste, lectores de pantalla).
- Optimización de datos (compresión, ElasticSearch).
- Pruebas automatizadas (CI/CD).
- Seguridad avanzada (validaciones, MFA).
- Destacar en el mercado: colaboración grupal, gamificación, multiplataforma.

#### 4. Recursos y Enlaces Útiles
- Servicios gratuitos para desarrollo: [free-for-dev](https://github.com/ripienaar/free-for-dev)
- Modelos IA open source: [HuggingFace](https://huggingface.co/models)
- Herramientas de visualización: [Chart.js](https://www.chartjs.org/), [D3.js](https://d3js.org/)
- Procesamiento de documentos: [Textract](https://github.com/deanmalmgren/textract), [PyPDF2](https://github.com/py-pdf/pypdf2)

---

> Todas las ideas, features y recursos están documentados y priorizados para facilitar el desarrollo, la colaboración y la innovación continua en ProfePluss.

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

---

# Plataforma EdTech: Proceso de Auditoría, Refactorización y Branding Internacional

## 1. Estudio de Mercado y Benchmarking
- Análisis de más de 40 plataformas EdTech y SaaS internacionales (Coursera, Udemy, Duolingo, Khan Academy, Platzi, Domestika, Skillshare, EdX, FutureLearn, etc.).
- Identificación de tendencias en naming, branding, posicionamiento y experiencia de usuario.
- Generación de palabras clave y valores de marca universales.

## 2. Criterios para Naming y Branding
- Nombres fáciles de pronunciar y recordar en distintos idiomas.
- Sin connotaciones negativas en los principales idiomas.
- Dominio .com disponible o alternativa premium.
- Originalidad y potencial de marca global.

## 3. Proceso de Generación de Nombres
- Shortlist de más de 20 opciones únicas y memorables.
- Para cada opción:
  - Nombre propuesto
  - Justificación y enfoque
  - Disponibilidad de dominio
  - Eslogan/tagline sugerido
  - Mockup visual (logo y línea visual básica)
  - Observaciones sobre asociaciones culturales

## 4. Robustez Técnica y Docker
- Healthchecks y endpoints `/health/` implementados en todos los servicios.
- Scripts de arranque Docker reforzados: espera inteligente de la base de datos, migraciones automáticas, creación de usuarios de prueba.
- Test suite backend y frontend ampliado y en ejecución.
- Mejora de logs y manejo de errores.

## 5. Revamp Visual y UX/UI
- Layout moderno, paleta premium y tipografía profesional aplicados en las pantallas principales.
- Onboarding visual y dashboards atractivos en desarrollo.
- Accesibilidad y experiencia responsive mejoradas.

## 6. Validación y Test Suite
- Pruebas automáticas y manuales de todos los flujos (login, cursos, IA, administración, subida de documentos, tests, certificaciones, etc.).
- Checklist de seguridad, SEO y performance en revisión.

## 7. Documentación y Despliegue
- README y documentación técnica actualizados.
- Instrucciones de despliegue y uso con Docker Compose.
- Créditos y licencias de recursos visuales y de código.

## 8. Entrega y Selección de Branding
- Informe PDF/Markdown con shortlist de nombres, mockups visuales y criterios de selección.
- Carpeta con recursos visuales y documentación técnica.
- Plan de integración del nuevo branding en frontend, documentación y recursos visuales.

---

**Avance:**
- El repositorio está actualizado con los últimos cambios técnicos y de documentación.
- En breve se entregará el informe completo de branding para selección.

---
