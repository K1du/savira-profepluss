# ProfePluss Architecture (English)

## Overview
The platform is split into three main services:
- **Backend (Django):** Handles authentication, user management, document processing, AI features, notifications, and API.
- **Frontend (React):** User interface, communicates with backend via REST API.
- **Database (Postgres):** Stores users, documents, notifications, etc.

## Data Flow
1. User interacts with the React frontend.
2. Frontend sends requests to Django backend (REST API).
3. Backend processes requests, interacts with the database and AI utilities.
4. Backend returns responses to frontend.

## Docker Compose Diagram
```
+-----------+        +-----------+        +-----------+
|  Frontend | <----> |  Backend  | <----> |  Postgres |
|  React    |        |  Django   |        |  DB       |
+-----------+        +-----------+        +-----------+
```

## Key Endpoints
- `/api/login/` – Email login
- `/api/register/` – User registration
- `/api/documentos/` – Document upload/list
- `/api/documentos/<id>/resumen/` – AI-powered summarization
- `/api/documentos/<id>/test/` – AI-powered test generation

## Security
- Uses JWT for authentication (SimpleJWT)
- Email/password login only (no username)
- CORS enabled for frontend-backend communication

## Extensibility
- Add more AI features in `backend/documentos/ia_utils.py`
- Add more frontend pages/components in `frontend/frontend-app/src/pages`

For more details, see the code or open an issue.
