import requests
import sys

BACKEND = "http://localhost:8000"

users = [
    {"email": "testuser@profepluss.com", "password": "123456789"},
    {"email": "admin@profepluss.com", "password": "admin123456"}
]

def test_login(user):
    resp = requests.post(f"{BACKEND}/api/login/", json=user)
    print(f"Login for {user['email']}: {resp.status_code}")
    if resp.ok:
        print("  Access token:", resp.json().get("access", "<none>"))
    else:
        print("  Response:", resp.text)
    return resp.ok

def main():
    ok = True
    for user in users:
        if not test_login(user):
            ok = False
    sys.exit(0 if ok else 1)

if __name__ == "__main__":
    main()
