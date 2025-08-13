import React from "react";
import Navbar from "./Navbar";

const Header = () => {


  return (
    <>

      {/* <!-- start stick note  --> */}
      <div class="sticknotes">
        <a href="javascript:void(0);" class="about">
          About
        </a>
        <a href="javascript:void(0);" class="blog">
          Blog
        </a>
        <a href="javascript:void(0);" class="news">
          News
        </a>
        <a href="javascript:void(0);" class="contact">
          Contact
        </a>
      </div>
      {/* <!-- end stick note  --> */}
      {/* <!-- start header section --> */}

      <header id="header">
        {/* <!-- Start Nav Bar --> */}
        <Navbar />
        {/* <!-- End Nav Bar --> */}

        {/* <!-- Start Banner --> */}
        <div class="text-light text-center text-md-end banners">
          <h1 class="display-4 bannerheaders">
            Welcome to <span class="display-3 text-uppercase">Plannco</span>{" "}
            Home Decoration Co.,Ltd
          </h1>
          <p class="lead bannerparagraphs">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        {/* <!-- End Banner --> */}
      </header>
      {/* <!------------end header section---------- --> */}
    </>
  );
};

export default Header;
