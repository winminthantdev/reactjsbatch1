import { BrowserRouter as Routers, Routes, Route, Link } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import ClientPage from './pages/ClientPage'
import SoftwarePage from './pages/SoftwarePage'
import SpecialPricingPage from './pages/SpecialPricingPage'
import ContactUsPage from './pages/ContactUsPage'

function App() {

  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/clients' element={<ClientPage />} />
          <Route path='/aboutus' element={<AboutPage />} />
          <Route path='/softwares' element={<SoftwarePage />} />
          <Route path='/pricing' element={<SpecialPricingPage />} />
          <Route path='/contact' element={<ContactUsPage />} />
        </Routes>
      </div>
  ) 
}

export default App
