import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'
import './lib/fontawesome.js'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

createRoot(document.getElementById('root')).render(
  <div> 
    <Router>
    <App />
    </Router>
  </div>,
)
