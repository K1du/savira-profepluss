# Arquitectura de ProfePluss (Español)

## Descripción general
La plataforma se divide en tres servicios principales:
- **Backend (Django):** Autenticación, gestión de usuarios, procesamiento de documentos, IA, notificaciones y API.
- **Frontend (React):** Interfaz de usuario, comunicación con backend vía REST API.
- **Base de datos (Postgres):** Almacena usuarios, documentos, notificaciones, etc.

## Flujo de datos
1. El usuario interactúa con el frontend React.
2. El frontend envía peticiones al backend Django (REST API).
3. El backend procesa, consulta la base de datos y utiliza utilidades de IA.
4. El backend responde al frontend.

## Diagrama Docker Compose
```
+-----------+        +-----------+        +-----------+
|  Frontend | <----> |  Backend  | <----> |  Postgres |
|  React    |        |  Django   |        |  DB       |
+-----------+        +-----------+        +-----------+
```

## Endpoints clave
- `/api/login/` – Login por email
- `/api/register/` – Registro de usuario
- `/api/documentos/` – Subida/listado de documentos
- `/api/documentos/<id>/resumen/` – Resumen con IA
- `/api/documentos/<id>/test/` – Generación de test con IA

## Seguridad
- Autenticación JWT (SimpleJWT)
- Login solo por email (no username)
- CORS habilitado para comunicación frontend-backend

## Extensibilidad
- Añadir más IA en `backend/documentos/ia_utils.py`
- Añadir páginas/componentes en `frontend/frontend-app/src/pages`

Para más detalles, consulta el código o abre un issue.
