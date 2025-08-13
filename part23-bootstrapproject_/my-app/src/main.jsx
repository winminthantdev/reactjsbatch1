import { createRoot } from "react-dom/client";
import './lib/fontawesome.js'
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/css/style.css';

createRoot(document.getElementById("root")).render(
  <div>
    <Router>
    <App />
    </Router>
  </div>
);
