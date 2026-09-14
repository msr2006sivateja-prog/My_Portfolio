# Interactive Multi-Page Portfolio

This is my personal portfolio website built as part of my Full Stack Development assignment. I started this project using React and later added a Node.js and Express backend.

The main goal of this project is to understand how a React frontend communicates with a backend and how data can be handled through APIs.

## About the Project

The website contains pages for Home, About, Projects, and Contact. A navigation bar and footer are shared across the different pages.

The Projects page gets project information from the Express backend. The Contact page also sends form submissions to the backend, where the data is validated and stored in a JSON file.

## Features

- Multi-page navigation using React Router
- Home, About, Projects and Contact pages
- Reusable ProjectCard component
- Dynamic project detail pages
- Projects loaded from the backend
- Contact form connected to the backend
- Server-side form validation
- Contact submissions stored in a JSON file
- Loading and error states
- Light and dark theme
- Theme preference saved using localStorage
- Loading screen on the Home page
- Responsive layout
- 404 page for invalid routes

## Technologies Used

### Frontend

- React
- JavaScript
- HTML
- CSS
- React Router DOM
- Vite

### Backend

- Node.js
- Express.js
- CORS
- dotenv
- JSON file storage

## Project Structure

The project is divided into frontend and backend parts.

portfolio-react/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── data/
│
├── server/
│   ├── data/
│   │   ├── projects.js
│   │   └── contacts.json
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── package.json
└── README.md

The React code is inside the src folder, while the Express backend is inside the server folder.

## Backend API

The backend runs on port 5000 during development.

### GET /

Checks whether the backend is running.

Example response:

{
  "status": "ok"
}

### GET /api/projects

Returns the list of projects stored on the backend.

### GET /api/projects/:id

Returns a single project using its ID.

Example:

/api/projects/1

If the project does not exist, the server returns:

{
  "error": "Project not found"
}

### POST /api/contact

Receives contact form data.

Example request:

{
  "name": "Siva",
  "email": "siva@example.com",
  "message": "Hello"
}

The backend checks that all fields are provided and that the email format is valid. Valid submissions are stored in server/data/contacts.json.

### GET /api/contact

Returns the contact form submissions stored by the backend.

This endpoint does not require authentication and is intentionally open for assignment verification.

### Invalid Routes

If an undefined route is requested, the backend returns a JSON 404 response instead of an HTML error page.

## Environment Variables

The backend uses a .env file for configuration.

Create a .env file inside the server folder:

PORT=5000
FRONTEND_URL=http://localhost:5173
DATA_PATH=./data

A .env.example file is included in the repository. The actual .env file is not committed to GitHub.

## Running the Project

There are two parts to run: the backend and the frontend.

### 1. Start the Backend

Open a terminal inside the server folder:

npm install
npm start

The backend will run on:

http://localhost:5000

### 2. Start the Frontend

Open another terminal in the main project folder:

npm install
npm run dev

The frontend will normally run on:

http://localhost:5173

Both the backend and frontend need to be running for the complete application to work.

## What I Learned

While working on this project, I learned how to create reusable React components, pass data using props, use React Router, manage state using useState, and handle side effects using useEffect.

For the backend part, I learned the basics of Node.js and Express, how to create API routes, receive data from a React frontend, validate form data on the server, use environment variables, handle errors, and store data in a JSON file.

I also learned how the frontend and backend work together as separate parts of a full-stack application.

## AI Assistance

I used AI tools during the development of this project mainly for debugging errors, understanding error messages, and getting suggestions while working on small parts of the application.

## Screen Recording
https://drive.google.com/file/d/1qoyqphpEM43UEpxW4f8pbhg0LxTRDaRB/view?usp=sharing