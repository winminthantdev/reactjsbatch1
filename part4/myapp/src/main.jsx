// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardOne from './component/CardOne.jsx'
import CardTwo from './component/CardTwo.jsx'
import CardThree from './component/CardThree.jsx'
import CardFour from './component/CardFour.jsx'
import CardFive from './component/CardFive.jsx'
import CardSix from './component/CardSix.jsx'
import CardSeven from './component/CardSeven.jsx'
import CardEight from './component/CardEight.jsx'
import CardNine from './component/CardNine.jsx'
import CardTen from './component/CardTen.jsx'
import CardEleven from './component/CardEleven.jsx'
import CardTwelve from './component/CardTwelve.jsx'
import CardThirteen from './component/CardThriteen.jsx'
import CardFourteen from './component/CardFourteen.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <CardOne />
    <CardTwo />
    <CardThree />
    <CardFour />
    <CardFive />
    <CardSix />
    <CardSeven />
    <CardEight />
    <CardNine />
    <CardTen />
    <CardEleven />
    <CardTwelve />
    <CardThirteen />
    <CardFourteen />
  </React.StrictMode>
)
