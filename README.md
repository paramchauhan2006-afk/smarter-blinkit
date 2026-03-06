# Smarter Blinkit

Smarter Blinkit is a web-based marketplace that connects **buyers and local sellers** for fast grocery delivery.
Unlike traditional shopping apps that rely only on keyword search, this system aims to understand **user intent**, automate shopping tasks, and simplify inventory management for sellers.

---

# Project Objective

The goal of this project is to build a **smart grocery marketplace platform** where:

* Buyers can easily discover products from nearby sellers
* Sellers can efficiently manage their product inventory
* The system can assist users with intelligent shopping suggestions

---

# Project Structure

```
smarter-blinkit
│
├ backend
│   ├ controllers
│   │   └ productController.js
│   │
│   ├ models
│   │   └ Product.js
│   │
│   ├ routes
│   │   └ productRoutes.js
│   │
│   ├ config
│   ├ server.js
│   └ package.json
│
├ frontend
├ database
├ docs
│
├ README.md
└ .gitignore
```

---

# Tech Stack

### Backend

* Node.js
* Express.js
* JavaScript

### Tools

* Git
* GitHub
* Postman (API testing)

### Planned Technologies

* React (Frontend)
* MongoDB / PostgreSQL (Database)
* Neo4j (Graph database)
* Razorpay (Test payment integration)
* Barcode scanning libraries

---

# Backend Architecture

The backend follows the **MVC architecture pattern**.

### Model

Defines the structure of application data.

Example:

```
Product
```

### Controller

Handles business logic such as creating and retrieving products.

Example:

```
addProduct()
getProducts()
```

### Routes

Defines API endpoints and connects them to controllers.

Example:

```
/api/products
```

---

# Implemented Features

### Express Backend Server

A backend server built with Express.js to handle API requests.

### Product Inventory System

Basic product inventory functionality has been implemented.

Features include:

* Add new products
* Retrieve product list

---

# API Endpoints

### Add Product

```
POST /api/products
```

Example request body:

```json
{
  "name": "Rice",
  "price": 80,
  "category": "Food",
  "stock": 100,
  "sellerId": "seller001",
  "barcode": "8901234567891"
}
```

Example response:

```json
{
  "message": "Product added successfully",
  "product": { }
}
```

---

### Get Products

```
GET /api/products
```

Returns the list of all products currently stored in the system.

---

# Planned Features

### User Authentication

* Buyer login
* Seller login
* Secure authentication system

### Inventory Management

* Seller dashboard for managing products
* Barcode-based inventory updates

### Smart Shopping Assistant

Intent-based shopping suggestions.

Example:

User input:

```
Make pizza for 4 people
```

The system automatically suggests:

```
Flour
Cheese
Tomato sauce
```

### Product Recommendation System

Graph-based recommendation system for:

* Similar products
* Frequently bought together items

### Smart Order Processing

* Order splitting between multiple shops
* Optimized delivery routing

---

# Running the Project

### Clone the repository

```
git clone https://github.com/YOUR_USERNAME/smarter-blinkit.git
```

### Navigate to backend folder

```
cd backend
```

### Install dependencies

```
npm install
```

### Run the server

```
node server.js
```

Server will run at:

```
http://localhost:5000
```

---

# License

This project is intended for educational purposes.
