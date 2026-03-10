# Smarter Blinkit

Smarter Blinkit is a **MERN stack grocery marketplace platform** that connects buyers with local sellers for quick product discovery and inventory management.

## Tech Stack

**Backend**

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication

**Frontend**

* React.js
* React Router
* Axios

## Project Structure

backend

* config (db connection)
* controllers
* middleware
* models
* routes
* server.js

frontend

* components
* pages
* services
* App.js

## Backend Status

* MongoDB Atlas connected
* Authentication implemented
* Product CRUD APIs working

Example APIs:

POST /api/users/register
POST /api/users/login

GET /api/products
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id

## Frontend Status

* React app created
* Routing implemented
* Pages created (Home, Login, Register, Products, Add Product, Dashboard)

⚠️ Frontend API integration still under debugging.

## Run the Project

Backend

```
cd backend
npm install
node server.js
```

Frontend

```
cd frontend
npm install
npm start
```

Backend runs on
http://localhost:5000

Frontend runs on
http://localhost:3000

## Author

Param Chauhan
