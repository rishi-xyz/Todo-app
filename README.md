
# Todo Application

This is a simple Todo application built as part of my learning journey in the **Full Stack Web Development** course from Harkirat Singh's 0-100 cohort. The project serves as a practical implementation of the skills and technologies learned throughout the course.

## Features

- **Add Todos:** Create new tasks that you need to accomplish.
- **View Todos:** View a list of all your tasks.
- **Edit Todos:** Modify existing tasks to update their details.
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

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```
  2. **Install dependencies:**
	  ```
	  npm install
	  ```
  3. **Set up environment variables:**
	  > Create a `.env` file in the root directory and add your MongoDB connection string:
  	  ```
	  MONGODB_URI=your-mongodb-connection-string
	  ```
  4. **Run the application:**
	  ```
	  npm start
	  ```
  5. **Access the application:**
	  > Open your browser and navigate to `http://localhost:3000`.
	  
 ## Project Structure
```plaintext
├── public
│   ├── index.html
│   ├── styles.css
│   └── assets
├── src
│   ├── components
│   │   ├── TodoItem.js
│   │   ├── TodoList.js
│   │   └── ...
│   ├── pages
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── services
│       └── api.js
├── .env
├── package.json
├── README.md
└── LICENSE
```
	 
