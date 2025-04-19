# Guía paso a paso: Migración de ProfePluss a Namecheap (Stellar Plus)

Esta guía explica cómo migrar el proyecto ProfePluss de entorno local a tu hosting Namecheap con Stellar Plus. **Revisa las limitaciones de tu hosting antes de migrar** (por ejemplo, soporte para Python/Django).

---

## 1. Verificar compatibilidad del hosting
- Accede al panel de Namecheap y revisa si tu plan permite aplicaciones Python/Django.
- Si solo permite PHP, considera migrar a un VPS o cloud compatible.

## 2. Preparar el backend (Django)
- Cambia la base de datos de SQLite a MySQL (o PostgreSQL si está disponible en el hosting).
- Configura variables de entorno para producción (`DEBUG=False`, claves secretas, etc.).
- Usa `whitenoise` o similar para servir archivos estáticos.
- Genera archivos estáticos:
```bash
python manage.py collectstatic
```

## 3. Subir archivos al hosting
- Usa FTP/SFTP o el gestor de archivos de Namecheap para subir el código del backend y frontend.
- Sube también los modelos IA necesarios a una carpeta accesible (puede que debas usar rutas relativas).

## 4. Configurar el entorno Python
- Accede al cPanel y busca la opción "Setup Python App".
- Crea un entorno virtual Python e instala dependencias (`requirements.txt`).
- Configura el WSGI/ASGI entrypoint (por ejemplo, `profepluss/wsgi.py`).

## 5. Preparar el frontend (React)
- Ejecuta `npm run build` para generar la carpeta `dist` o `build`.
- Sube la carpeta generada al directorio público de tu hosting (`public_html`).

## 6. Configurar dominio y HTTPS
- Enlaza el dominio profeplus.es al directorio correcto en tu hosting.
- Configura HTTPS con Let's Encrypt o el certificado SSL de Namecheap.

## 7. Probar la web en producción
- Accede a profeplus.es y verifica que todo funcione (login, subida de archivos, chatbot, etc.).
- Si hay errores, revisa los logs del hosting y ajusta la configuración.

---

## Consejos y advertencias
- El hosting compartido puede tener limitaciones de RAM/CPU para modelos IA grandes. Considera un VPS si necesitas más recursos.
- Mantén copias de seguridad antes de migrar.
- Documenta cualquier cambio en configuración o dependencias.

¿Dudas? Consulta este documento o pregunta al responsable técnico.
