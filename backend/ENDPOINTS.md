# Endpoints REST – ProfePluss (MVP)

## Usuarios
- POST /api/register/         → Registro de usuario
- POST /api/login/            → Login
- GET  /api/profile/          → Obtener perfil
- PUT  /api/profile/          → Editar perfil

## Documentos
- POST /api/documents/        → Subir documento
- GET  /api/documents/        → Listar documentos usuario
- GET  /api/documents/{id}/   → Ver documento
- DELETE /api/documents/{id}/ → Borrar documento

## Flashcards
- POST /api/flashcards/       → Generar flashcards de documento
- GET  /api/flashcards/{id}/  → Ver flashcards de documento

## Quizzes
- POST /api/quizzes/          → Generar preguntas tipo test
- GET  /api/quizzes/{id}/     → Ver preguntas de documento

## Chatbot
- POST /api/chatbot/          → Enviar pregunta al chatbot

## Grupos
- POST /api/groups/           → Crear grupo
- GET  /api/groups/           → Listar grupos
- POST /api/groups/{id}/join/ → Unirse a grupo
- GET  /api/groups/{id}/      → Ver grupo y mensajes
- POST /api/groups/{id}/msg/  → Enviar mensaje

---

**Notas:**
- Todos los endpoints requieren autenticación excepto registro y login.
- La estructura está pensada para MVP y es extensible.
