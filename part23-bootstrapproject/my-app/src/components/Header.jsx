import React from "react";
import Navbar from "./Navbar";



const Header = ()=>{
  return(
    <>
      {/* Start Back to Top */}
        <div className="fixed-bottom">
            <a href="#" className="btn-backtotops"><i className="fas fa-arrow-up"></i></a>
        </div>
      {/* End Back to Top */}

        
        {/* Start Header Section */}
            <header>

                {/* Start  Nav Bar */}
                <Navbar />
                {/* End Nav Bar */}
        
                {/* Start Banner */}

                    <div className="text-light text-center text-md-end banners">
                        <h1 className="display-4 bannerheaders">Welcome to <span className="display-3 text-uppercase">Plannco</span> Home Decoration Co.,Ltd</h1>
                        <p className="lead bannerparagraphs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                {/* End Banner */}
        
            </header>
        {/* End Header Section */}
        
        
    </>
  )
};

export default Header;