# Install React Router: You will need to install the react-router-dom package. Run the following command in your project directory:
Code
npm install react-router-dom

# Set Up the Router:
In your main application file (e.g., index.js or App.js), wrap your application with BrowserRouter:
JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

# Define Routes: Inside your application component, use Routes and Route to define your application’s routes:
JavaScript
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
    </Routes>
  );
};

export default App;

# Linking Between Routes: Use Link or NavLink to navigate between routes without reloading the page:
JavaScript
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

# Dynamic Routing: If you need a route that accepts parameters, you can do so like this:
JavaScript
<Route path="/user/:id" element={<User />} />
Inside the User component, you can access the id parameter using the useParams hook:

JavaScript
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
};