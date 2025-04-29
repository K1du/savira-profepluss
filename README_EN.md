# ProfePluss – AI-powered Educational Platform (MVP)

## What is this project?
ProfePluss is a modern, minimalist, and multilingual educational platform designed to facilitate study and collaboration among students, leveraging open-source AI and current web technologies. This documentation is in English for international users and developers.

---

## Quickstart (Docker Compose)

### 1. Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### 2. Start All Services
From the project root:
```sh
docker-compose up --build
```
- The first run may take a few minutes.

### 3. Access the Platform
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

### 4. Default Users
- **Test User:**
  - Email: `testuser@profepluss.com`
  - Password: `123456789`
- **Admin User:**
  - Email: `admin@profepluss.com`
  - Password: `admin123456`

### 5. Useful Commands
- Stop services: `docker-compose down`
- Rebuild only backend: `docker-compose build backend`

## Environment Variables
- Backend: See `backend/profepluss/settings.py` for required variables. Most are set by default for local Docker.
- Frontend: Uses React proxy to connect to backend (`proxy` in `package.json`).

## Main Features
- User registration/login (by email)
- Document upload and AI-powered summarization
- Multiple-choice test generation
- In-app and email notifications
- Admin panel (Django)

## Contributing
- Spanish is the main dev language, but PRs/issues are welcome in English.
- Please open issues for bugs or feature requests.

## License
MIT

---

## Roadmap and Strategic Features

### Current MVP
- User registration and authentication (email login)
- Document upload and management
- AI-powered document summarization (OCR and PDF supported)
- Multiple-choice test generation from documents
- Notification system (in-app and email)
- Admin dashboard (Django)

### Next Steps
- Improve AI summarization quality
- Add more languages (UI and AI)
- Real-time collaboration features
- Mobile-first UI improvements
- Analytics for users and admins

## Project Structure
- `backend/`: Django REST API, user management, AI logic
- `frontend/frontend-app/`: React app (UI/UX)
- `docker-compose.yml`: Orchestrates backend, frontend, and database

## Contact
For questions, suggestions, or contributions, please open an issue or contact the maintainers.
