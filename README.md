# Inventory and Data Management System

A RESTful backend API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** for managing product catalogues, tracking inventory levels, and generating analytical reports[cite: 1].

## Features

- **Product Schema & Validation:** Enforces required fields, unique uppercase SKUs, non-negative constraints on price/quantity, and a dynamic `stockValue` virtual field[cite: 1].
- **Full CRUD Operations:** Create, retrieve, update, and delete products[cite: 1, 6].
- **Advanced Querying:** Supports category filtering, case-insensitive name search, sorting, and pagination[cite: 1, 6].
- **Safe Stock Adjustments:** Dedicated `PATCH` endpoint to handle stock increments (restock) and decrements (sales) while preventing negative inventory[cite: 1, 5].
- **Inventory Reports (Aggregation):**
  - **Low-Stock Alert:** Identifies products where current stock is at or below the reorder level[cite: 1, 4].
  - **Category-Wise Summary:** Aggregates total items, total quantity, total stock value, and average price per category[cite: 1, 5].
- **Centralized Error Handling & Environment Management:** Managed via Express error middleware and `dotenv`[cite: 1, 6].

## Tech Stack

- **Runtime:** Node.js[cite: 1]
- **Framework:** Express.js[cite: 1]
- **Database & ODM:** MongoDB & Mongoose[cite: 1]
- **Configuration:** dotenv[cite: 1]

## Project Structure

```text
Inventory-Management-System/
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js