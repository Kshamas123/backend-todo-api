
# 📝 Backend Challenge – To-Do API

This project is part of my **Backend Challenge Journey** where I take small tasks from ChatGPT to strengthen my **backend development skills**.
I built a simple yet complete **RESTful To-Do API** using **Node.js**, **Express**, and **MongoDB**—from database connection to CRUD operations.

---

## 🚀 Features

* **Create** a new todo
* **Read** all todos or a single todo by ID
* **Update** a todo’s details
* **Delete** a todo
* Input validation & basic error handling
* Environment-based configuration (no secrets in code)

---

## 🛠️ Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework for routing and APIs
* **MongoDB + Mongoose** – Database and object modeling
* **dotenv** – Environment variable management

---

## 📂 Project Structure

```
.
├─ models/
│   └─ todo_schema.js     # Mongoose schema/model
├─ db.js                  # MongoDB connection setup
├─ app.js                 # Main Express server & routes
├─ .env.example           # Sample environment variables
└─ README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/backend-todo-api.git
cd backend-todo-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the project root and add:

```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### 4️⃣ Run the Server

```bash
npm start
```

The API will start at **[http://localhost:3000](http://localhost:3000)**

---

## 🔗 API Endpoints

| Method | Endpoint     | Description       | Sample Request Body                           |
| ------ | ------------ | ----------------- | --------------------------------------------- |
| GET    | `/todos`     | Get all todos     | –                                             |
| GET    | `/todos/:id` | Get a single todo | –                                             |
| POST   | `/todos`     | Add a new todo    | `{ "title": "Buy milk","category": any remark}` |
| PUT    | `/todos/:id` | Update a todo     | `{ "title": "Buy bread", "category": any remark}` |
| DELETE | `/todos/:id` | Delete a todo     | –                                             |

---

## 🌟 Learning Journey

I completed this project as part of a **self-paced backend challenge** with ChatGPT.
The goal was to **recall concepts**, explore **documentation**, and build a working API with minimal assistance.
I debugged issues (like MongoDB connection and route parameters) and strengthened my understanding of:

* REST API design
* Database integration
* Async/await and error handling

---



### 💡 Next Steps

Future improvements could include:

* Pagination & filtering
* User authentication (JWT)
* Deployment to a cloud platform



