# MERN Todo App (Atlas-ready)

This repository contains a full MERN Todo application with user authentication (JWT), CRUD for todos, and React Context API for frontend state management.

## Setup (MongoDB Atlas)

1. Create a MongoDB Atlas cluster and get the connection string (replace <password> and DB name).
2. Copy `.env.example` to `.env` inside `/backend` and paste your Atlas connection string as MONGO_URI.
3. Install and run:

```bash
# backend
cd backend
npm install
cp .env.example .env   # edit .env with your Atlas URI and JWT secret
npm run dev

# frontend
cd ../frontend
npm install
REACT_APP_API_URL=http://localhost:5000/api npm start
```

## Notes
- Use strong JWT secret in production.
- Consider HTTPS and other security hardening for production.
