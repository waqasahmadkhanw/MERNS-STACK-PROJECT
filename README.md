


# 🔐 MERN Auth Backend – Register, Login, Logout, Refresh Token & Password Management

This project is a **Node.js + Express + MongoDB** authentication backend that provides a complete user system with:

- ✅ Register
- ✅ Login
- ✅ Logout
- ✅ Refresh Token
- ✅ Change Password
- ✅ Secure JWT + Cookies
- ✅ Full CRUD-ready user structure
   many more..........

---

## 🚀 Tech Stack

- Node.js (ES Modules)
- Express.js
- MongoDB + Mongoose
- JWT (Access & Refresh Tokens)
- bcrypt
- cookie-parser
- cors
- dotenv

---

## 📁 Project Structure



src/
│
├── app.js
├── index.js
├── db/
│ └── index.js
├── models/
│ └── user.model.js
├── controllers/
│ └── user.controller.js
│    └── register.controller.js
│    └── login.controller.js
├── routes/
│ └── register.routes.js
├── middlewares/
│ └── register.middleware.js
└── utils/
└── 


---

## ⚙️ Environment Variables

Create a file named `.env` or `env` in root:

```env
PORT=6000
MONGODB_URI=mongodbatlas url
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
CORS_ORIGIN=http://localhost:5173

🔧 Installation
npm install
npm run dev

🔐 Auth API Endpoints
Method	Route	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
POST	/api/auth/logout	Logout user
POST	/api/auth/refresh	Refresh access token
POST	/api/auth/change	Change password
🔑 Token Flow

Access Token → Short lived (used for API)

Refresh Token → Stored in HTTP-only cookie

Refresh endpoint issues new access token

🛡️ Security Features

Password hashing using bcrypt

HTTP-only cookies for refresh token

CORS with credentials enabled

JWT-based authentication

📌 Example: Register Request
POST /api/auth/register
{
  "name": "Waqas",
  "email": "waqas@example.com",
  "password": "123456"
}

👨‍💻 Author

Waqas Ahmad Khan
MERN Stack | GenAI | DevOps 🚀
📜 License
This project is open-source and free to use.
---

If you want, next I can:  
✔ Add Postman collection  
✔ Add Role-Based Access (Admin/User)  
✔ Add Frontend Auth (React + Redux Toolkit)

Project uses all standard practices like JWT, bcrypt, access tokens, refresh Tokens and many more. We have spent a lot of time in building this project and we are sure that you will learn a lot from this project.