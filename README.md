# Django technical assesment
## Prerequisites
Backend: Python 3, Django, Django REST Framework
Frontend: Node.js, Angular CLI

# Runnning the project
in relief-applications/backend:
python manage.py migrate
python manage.py runserver

in relief-applications/frontend:
npm install
ng serve --port 4200

Upon accessing the Angular app on https://localhost:4200/, it will automatically send the GET and POST requests to add and view bookmarks and history. They are available in the developer interface (f12).

The API can be accessed on the following URLS:
http://localhost:8000/api/history/
http://localhost:8000/api/bookmarks/
