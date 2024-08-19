
# Todo Application

This is a simple Todo application built as part of my learning journey in the **Full Stack Web Development** course from Harkirat Singh's 0-100 cohort. The project serves as a practical implementation of the skills and technologies learned throughout the course.

## Features

- **Add Todos:** Create new tasks that you need to accomplish.
- **View Todos:** View a list of all your tasks.
- **Delete Todos:** Remove tasks that are no longer needed.
- **Mark as Complete:** Mark tasks as completed once they are done.

## Technologies Used

- **Frontend:** 
  - JavaScript
  - React.js

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB 

- **Version Control:**
  - Git & GitHub

- **Deployment:**
  - Vercel

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/rishi-xyz/Todo-app.git
   cd Todo-app
   ```
  2. **Install dependencies:**
	  ```
	  npm install
	  ```
  3. **Set up environment variables:**
	  > Create a `.env` file in the root directory and add your MongoDB connection string in backend dir:
  	  ```
	  MONGODB_URI=your-mongodb-connection-string
	  ```
  4. **Run the application:**
	  > In backend directory:(To run backend)
	  ```
	  node index.js 
	  ```
	  > In frontend directory: (To run frontend)
	  ```
	  npm run dev # To run frontend
	  ```
   	  > Run both together

  5. **Access the application:**
	  > Open your browser and navigate to `http://localhost:5173`.
	  
 ## Project Structure
```plaintext
Todo-app/
├── backend/
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── types.js
│
├── frontend/
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets/
│   │   │   ├── react.svg
│   │   │   └── components/
│   │   │       ├── CreateTodo.css
│   │   │       ├── CreateTodo.jsx
│   │   │       ├── Todos.css
│   │   │       └── Todos.jsx
│   ├── README.md
│   └── vite.config.js
│
├── README.md

```
	 
