import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router'
import "./App.css"

import Home from './pages/Home.jsx';
import Deposit from './pages/Deposit.jsx';
import Withdraw from './pages/Withdraw.jsx';

function App() {


  return (
    <section>
      <Router>
        <nav>
          <ul className="list-group">
            <li className="list-group-item"><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
            <li className="list-group-item"><NavLink className="nav-link" to={'/deposit'}>Deposit</NavLink></li>
            <li className="list-group-item"><NavLink className="nav-link" to={'/withdraw'}>Withdraw</NavLink></li>
          </ul>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
        </Routes>

      </Router>
    </section>
  )
}

export default App
