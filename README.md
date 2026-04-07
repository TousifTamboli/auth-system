# 🔐 Full Stack Authentication System

A secure and scalable authentication system built using modern web technologies. This project implements industry-level authentication practices including JWT, HTTP-only cookies, and PostgreSQL integration.

---

## 🚀 Features

* User Signup & Login
* Secure password hashing using bcrypt
* JWT-based authentication (Access + Refresh Tokens)
* HTTP-only cookie storage (XSS protection)
* Protected routes with middleware
* PostgreSQL database with Prisma ORM
* Rate limiting for security
* Scalable backend architecture

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Fetch API
* Basic UI (can be extended with ShadCN UI)

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Prisma ORM

### Authentication & Security

* JWT (JSON Web Tokens)
* bcrypt (password hashing)
* Cookie-parser (secure cookies)
* Express Rate Limit

---

## 📁 Project Structure

auth-system/
│── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── index.js
│── prisma/
│── .env
│── package.json

---

## 🔐 Authentication Flow

1. User signs up with email & password
2. Password is hashed using bcrypt and stored in PostgreSQL
3. On login:

   * Credentials are verified
   * Access & Refresh tokens are generated
   * Tokens are stored in HTTP-only cookies
4. Protected routes are accessed using middleware
5. Refresh token generates new access tokens when expired

---

## ⚙️ Setup Instructions

### 1. Clone the repository

git clone https://github.com/YOUR_USERNAME/auth-system.git

### 2. Install dependencies

npm install

### 3. Setup environment variables

Create a .env file:

DATABASE_URL=your_postgres_url
JWT_SECRET=your_secret_key

### 4. Run database migrations

npx prisma migrate dev

### 5. Start server

npm run dev

---

## 🔒 Security Features

* HTTP-only cookies (prevents XSS attacks)
* Password hashing with bcrypt
* JWT expiration handling
* Rate limiting to prevent brute-force attacks

---

## 🚀 Future Improvements

* Email OTP verification
* Role-based access control (RBAC)
* OAuth (Google login)
* Deployment with Docker & AWS
* Microservices architecture

---

## 👨‍💻 Author

Your Name

---

## ⭐ If you like this project

Give it a star on GitHub!
