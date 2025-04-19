# Documentación General – ProfePluss

Esta documentación está pensada para que todos los miembros de todos los departamentos implicados (desarrollo, diseño, IA, QA, documentación, soporte, gestión, etc.) puedan entender y contribuir al proyecto de forma coordinada.

---

## Índice
1. [Visión general y objetivos](#vision)
2. [Estructura del proyecto](#estructura)
3. [Roadmap y fases](#roadmap)
4. [Guía para cada departamento](#departamentos)
5. [Guía técnica de instalación y desarrollo](#tecnica)
6. [Guía de modelos IA en local](#ia)
7. [Guía de migración a producción](#migracion)
8. [Recursos y contacto](#recursos)

---

<a name="vision"></a>
## 1. Visión general y objetivos
ProfePluss es una plataforma educativa moderna, minimalista y multilingüe, basada en IA open source, para ayudar a estudiantes y docentes a organizar, aprender y colaborar de manera eficiente.

---

<a name="estructura"></a>
## 2. Estructura del proyecto
Consulta el README principal y el diagrama de carpetas. Cada módulo (backend, frontend, IA, wireframes, libros_demo) tiene su propio README.

---

<a name="roadmap"></a>
## 3. Roadmap y fases
- Fase 1: MVP local (web, IA, funcionalidades básicas)
- Fase 2: Expansión (pagos, app móvil, integración externa, producción)
Consulta el README principal para detalles.

---

<a name="departamentos"></a>
## 4. Guía para cada departamento

### 4.1 Desarrollo Backend
- Instalar entorno virtual y dependencias (`requirements.txt`)
- Seguir el esquema de base de datos ([DB_SCHEMA.md](backend/DB_SCHEMA.md))
- Implementar endpoints REST ([ENDPOINTS.md](backend/ENDPOINTS.md))
- Integrar modelos IA locales ([MODELOS_IA_LOCAL.md](backend/MODELOS_IA_LOCAL.md))

### 4.2 Desarrollo Frontend
- Inicializar proyecto React + Tailwind ([frontend/README.md](frontend/README.md))
- Implementar internacionalización (i18next)
- Seguir wireframes para el diseño visual ([wireframes/README.md](wireframes/README.md))
- Integrar subida de archivos y chatbot

### 4.3 IA/ML
- Descargar y probar modelos open source (T5, GPT-Neo, BERT, Vosk, Coqui TTS)
- Documentar y optimizar el uso de modelos en local
- Colaborar con backend para endpoints inteligentes

### 4.4 Diseño UI/UX
- Seguir wireframes y adaptar el estilo al logo y tendencias educativas
- Proponer mejoras visuales y de experiencia de usuario

### 4.5 QA y Testing
- Probar todas las funciones en local
- Documentar bugs y sugerencias de mejora
- Validar la experiencia multilingüe y la subida de archivos

### 4.6 Documentación y Soporte
- Crear manuales de usuario y videotutoriales
- Mantener actualizada la documentación técnica y de usuario

### 4.7 Gestión y coordinación
- Usar este documento y el README como referencia para el avance y la asignación de tareas
- Mantener comunicación entre departamentos (reuniones, tickets, etc.)

---

<a name="tecnica"></a>
## 5. Guía técnica de instalación y desarrollo
- Backend: ver [backend/README.md](backend/README.md)
- Frontend: ver [frontend/README.md](frontend/README.md)
- Modelos IA: ver [backend/MODELOS_IA_LOCAL.md](backend/MODELOS_IA_LOCAL.md)
- Endpoints y base de datos: ver [backend/ENDPOINTS.md](backend/ENDPOINTS.md) y [backend/DB_SCHEMA.md](backend/DB_SCHEMA.md)

---

<a name="ia"></a>
## 6. Guía de modelos IA en local
- Ver [backend/MODELOS_IA_LOCAL.md](backend/MODELOS_IA_LOCAL.md)

---

<a name="migracion"></a>
## 7. Guía de migración a producción
- Ver [MIGRACION_NAMECHEAP.md](MIGRACION_NAMECHEAP.md)

---

<a name="recursos"></a>
## 8. Recursos y contacto
- Wireframes y prototipos: ver carpeta `/wireframes`
- Libros y documentos de prueba: ver carpeta `/libros_demo`
- Para dudas, contactar al responsable de proyecto o consultar la documentación específica de cada módulo.

---

**¡Usa este documento como guía central y mantén la comunicación abierta entre todos los departamentos!**
