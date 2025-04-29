# Dockerfile para backend Django
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Run migrations and create users on container startup
COPY scripts/init_superuser_and_testuser.py ./scripts/init_superuser_and_testuser.py

EXPOSE 8000
CMD ["/bin/sh", "-c", "python manage.py migrate && python scripts/init_superuser_and_testuser.py && python manage.py runserver 0.0.0.0:8000"]
