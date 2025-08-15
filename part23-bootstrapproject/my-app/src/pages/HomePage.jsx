import React from "react";

import Header from '../components/Header';
import Navbar from '../components/Navbar';

import AboutUs from '../components/AboutUs';
import Properties from '../components/Properties';
import Adv from '../components/Adv';
import BackToTop from '../components/BackToTop';

import Services from '../components/Services';
import Clients from '../components/Clients';
import Customers from '../components/Customers';
import Quote from '../components/Quote';
import Furniture from '../components/Furniture';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = ()=>{
  return(
    <>
      <Header />
      <Navbar />
      <AboutUs />
      <Properties />
      <Adv />
      <Services />
      <Clients />
      <Customers />
      <Quote />
      <Furniture />
      <Contact />
      <BackToTop />
      
    </>
  )
};

export default HomePage;