import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Client from '../components/Client'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'
import Public from '../components/Public'
import Software from '../components/Software'
import Team from '../components/Team'
import ModalBox from '../components/ModalBox'

const HomePage = () => {
  return (
    <>
    <Header />

    <Client />
    <Software />
    <Team />
    <Public />
    <Pricing />
    <Contact />
    <Footer />
    <ModalBox />
    </>
  )
}

export default HomePage
