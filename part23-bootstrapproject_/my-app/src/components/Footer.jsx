import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import favicon from "../assets/img/fav/favicon.png";
import { Link } from 'react-router';

const Footer = () => {
  return (
    
    // <!-- start Footer section -->

    <footer class="bg-dark px-5">
      <div class="container-fluid">

        <div class="row text-light py-4">
          <div class="col-md-3 col-sm-6">
            <h5 class="mb-3"><img src={favicon} width="70px" alt="sitelogo" />about <span class="text-uppercase">Plannco</span></h5>
            <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid nemo quibusdam dolorem placeat quae unde omnis similique delectus voluptates. Facilis obcaecati nam iste dolorum blanditiis ad sapiente nobis modi!</p>
          </div>
          <div class="col-md-3 col-sm-6">
            <h5 class="mb-3">Visit us</h5>
            <ul class="list-unstyled">
              <li class=""><Link to='/' class="footerlinks">Home</Link></li>
              <li class=""><Link to='/aboutus' class="footerlinks">About</Link></li>
              <li class=""><Link to='/properties' class="footerlinks">Properties</Link></li>
              <li class=""><Link to='/serviers' class="footerlinks">Services</Link></li>
              <li class=""><Link to='/customers' class="footerlinks">Customer</Link></li>
              <li class=""><Link to='/furnitures' class="footerlinks">Furniture</Link></li>
              <li class=""><Link to='/contacts' class="footerlinks">Contact</Link></li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6">
            <h5 class="mb-3">Need help?</h5>
            <ul class="list-unstyled">
              <li class=""><a href="javasript:void(0);" class="footerlinks">Customer service</a></li>
              <li class=""><a href="javasript:void(0);" class="footerlinks">Online Chat</a></li>
              <li class=""><a href="javasript:void(0);" class="footerlinks">Support</a></li>
              <li class=""><a href="javasript:void(0);" class="footerlinks">info@plannco.com</a></li>
              </ul>
          </div>
          <div class="col-md-3 col-sm-6">
            <h5 class="mb-3">Contact us</h5>
            <ul class="list-unstyled">
              <li class=""><a href="javasript:void(0);" class="nav-link">l-9/19(A),60 Street,Between Theik Pan Street and Aung San St,Mandalay.</a></li>
              <li class=""><a href="javasript:void(0);" class="nav-link">Phone: +95 9 773156667/+95 9 263038660</a></li>
            </ul>
          </div>
          <div class="text-light d-flex justify-content-between border-top pt-4">
            <p>&copy; <span id="getyears">2000</span> Copyright. Inc,All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class=""><a href="javasript:void(0);" class="nav-link"><FontAwesomeIcon icon='fa-brands fa-square-twitter' /></a></li>
              <li class="ms-3"><a href="javasript:void(0);" class="nav-link"><FontAwesomeIcon icon='fa-brands fa-square-instagram' /></a></li>
              <li class="ms-3"><a href="javasript:void(0);" class="nav-link"><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
    // <!--end Footer section -->
  )
}

export default Footer

