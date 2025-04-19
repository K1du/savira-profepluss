# Esquema de Base de Datos – ProfePluss (MVP)

## Usuarios
- id (PK)
- email
- contraseña (hash)
- nombre
- idioma
- tipo_usuario (free, pro, colaborativo)
- fecha_registro

## Documentos
- id (PK)
- usuario_id (FK)
- nombre_archivo
- ruta_archivo
- categoria (curso/asignatura)
- fecha_subida

## Flashcards
- id (PK)
- documento_id (FK)
- contenido_pregunta
- contenido_respuesta
- fecha_creacion

## Quizzes
- id (PK)
- documento_id (FK)
- pregunta
- opciones (json)
- respuesta_correcta
- fecha_creacion

## Grupos
- id (PK)
- nombre
- descripcion
- fecha_creacion

## Miembros_Grupo
- id (PK)
- grupo_id (FK)
- usuario_id (FK)
- rol (admin, miembro)

## Mensajes_Grupo
- id (PK)
- grupo_id (FK)
- usuario_id (FK)
- mensaje
- fecha_envio

## Logs de actividad (opcional)
- id (PK)
- usuario_id (FK)
- accion
- fecha

---

**Notas:**
- Se recomienda usar SQLite para desarrollo local.
- El esquema es extensible para futuras funcionalidades (pagos, integración externa, etc.).
