# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
    # CareerLink - Backend

CareerLink is a Job Portal web application that connects job seekers with employers. This repository contains the backend built using Django. It provides APIs, authentication, database management, and employer/job seeker functionalities.

---

## Features

- Employer Registration
- Job Seeker Registration
- Firebase Authentication
- User Login & Logout
- Employer Dashboard
- Job Posting
- Job Applications
- Resume Upload
- Company Profile
- Search & Filter Jobs
- Django Admin Panel
- REST API Support
- Secure Authentication
- SQLite Database (Development)

---

## Tech Stack

- Python 3.x
- Django
- Django REST Framework
- SQLite3
- Firebase Authentication
- Pillow
- CORS Headers

---

## Project Structure

```
backend/
│
├── accounts/
├── employer/
├── jobs/
├── jobseeker/
├── media/
├── static/
├── templates/
├── careerlink/
│
├── manage.py
├── requirements.txt
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/job_portal.git
```

Go to backend

```bash
cd backend
```

Create Virtual Environment

Windows

```bash
python -m venv venv
```

Activate

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

## Database Migration

```bash
python manage.py makemigrations

python manage.py migrate
```

---

## Create Admin

```bash
python manage.py createsuperuser
```

Follow the prompts to create the administrator account.

---

## Run Server

```bash
python manage.py runserver
```

Server

```
http://127.0.0.1:8000/
```

Admin Panel

```
http://127.0.0.1:8000/admin/
```

---

## Environment Variables

Create a `.env` file.

Example

```env
SECRET_KEY=your_secret_key

DEBUG=True

ALLOWED_HOSTS=127.0.0.1,localhost

FIREBASE_API_KEY=your_firebase_api_key

FIREBASE_PROJECT_ID=your_project_id

FIREBASE_STORAGE_BUCKET=your_storage_bucket
```

---

## Firebase Authentication

This project uses Firebase Authentication for:

- Google Login
- Email/Password Login
- User Authentication

Firebase configuration is stored securely using environment variables.

---

## API Modules

### Authentication

- Register
- Login
- Logout

### Employer

- Register Employer
- Company Profile
- Post Job
- Manage Jobs

### Job Seeker

- Register
- Upload Resume
- Edit Profile
- Apply Job

### Jobs

- Create Job
- Update Job
- Delete Job
- Job Details
- Search Jobs

---

## Media Upload

Supports

- Company Logo
- Resume (PDF)
- Profile Image

Uploaded files are stored inside

```
media/
```

---

## Future Enhancements

- JWT Authentication
- Email Verification
- Forgot Password
- Notifications
- AI Resume Screening
- AI Job Recommendation
- Video Interview Scheduling
- Chat System
- Company Verification
- Saved Jobs
- Application Tracking

---

## Team Members

- John Arumura
- Team Members

---

## License

This project is developed for educational and learning purposes.

---

## Contact

CareerLink

Email:
careerlink@gmail.com

GitHub:
https://github.com/JohnArumura

```

---

### If you're making this as a college/final-year project, I can also provide:
1. **:contentReference[oaicite:0]{index=0}**
2. **:contentReference[oaicite:1]{index=1}** (this one)
3. **:contentReference[oaicite:2]{index=2}**
4. **:contentReference[oaicite:3]{index=3}**
5. **:contentReference[oaicite:4]{index=4}**
6. **:contentReference[oaicite:5]{index=5}**

all with the same professional formatting.