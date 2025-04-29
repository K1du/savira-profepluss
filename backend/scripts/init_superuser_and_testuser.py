import os
import django
from django.contrib.auth import get_user_model

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'profepluss.settings')
django.setup()
User = get_user_model()

# Create superuser if not exists
if not User.objects.filter(email='admin@profepluss.com').exists():
    User.objects.create_superuser(
        username='admin',
        email='admin@profepluss.com',
        password='admin123456'
    )
    print('Superuser created.')
else:
    print('Superuser already exists.')

# Create test user if not exists
if not User.objects.filter(email='testuser@profepluss.com').exists():
    User.objects.create_user(
        username='testuser',
        email='testuser@profepluss.com',
        password='123456789'
    )
    print('Test user created.')
else:
    print('Test user already exists.')
