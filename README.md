# Interactive Multi-Page Portfolio

This is my personal portfolio website built as part of my Full Stack Development assignment. The main goal of this project was to learn React and understand how different React concepts work together to create a proper multi-page website.

## About the Project

The website contains different pages for Home, About, Projects, and Contact. I also added a navigation bar and footer that are shared across the different pages.

The Projects page displays my projects using a reusable `ProjectCard` component. Instead of writing each project directly inside the component, the project information is stored separately and passed using props.

## Features

- Multi-page navigation using React Router
- Home, About, Projects and Contact pages
- Reusable ProjectCard component
- Dynamic project detail pages
- Light and dark theme
- Theme preference saved using localStorage
- Loading screen on the Home page
- Contact form with basic validation
- Responsive layout for different screen sizes
- 404 page for invalid routes
- Prop drilling demonstration using child components

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- React Router DOM
- Vite

## Project Structure

The project is organized into separate folders for components, pages, assets and project data. This makes the code easier to understand and modify.

## Running the Project

To run the project locally:

1. Clone the repository.
2. Open the project folder in VS Code.
3. Install the required dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Open the local URL shown in the terminal.

## What I Learned

While working on this project, I learned how to create reusable React components, pass data through props, use React Router for navigation, manage state using `useState`, and handle side effects using `useEffect`.

I also got a better understanding of how to organize a React project instead of keeping everything inside one file.