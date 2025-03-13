# Django Technical Assessment

## Prerequisites

### Backend:
- Python 3
- Django
- Django REST Framework

### Frontend:
- Node.js
- Angular CLI

## Running the Project

### Backend (in `relief-applications/backend`):
1. Run migrations:  
   `python manage.py migrate`
2. Start the server:  
   `python manage.py runserver`

### Frontend (in `relief-applications/frontend`):
1. Install dependencies:  
   `npm install`
2. Start the Angular application:  
   `ng serve --port 4200`

## Accessing the Application

Once the Angular app is running, open it in your browser at [https://localhost:4200/](https://localhost:4200/). The app will automatically send `GET` and `POST` requests to add and view bookmarks and history. These requests can be viewed in the developer interface (press `F12`).

## API Endpoints

You can access the API at the following URLs:
- [http://localhost:8000/api/history/](http://localhost:8000/api/history/)
- [http://localhost:8000/api/bookmarks/](http://localhost:8000/api/bookmarks/)
