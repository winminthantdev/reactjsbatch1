import React from 'react'

import AboutUs from "../components/AboutUs";
import BackToTop from "../components/BackToTop";
import Contact from "../components/Contact";
import Customers from "../components/Customers";
import Footer from "../components/Footer";
import Furniture from "../components/Furniture";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Properties from "../components/Properties";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <AboutUs />

      <Contact />
      <Customers />
      <Furniture />
      <Properties />
      <Services />
      
      <BackToTop />
    </>
  )
}

export default HomePage
