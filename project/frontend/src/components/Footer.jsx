import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Footer = () => {

    const yearElement = document.getElementById("autoyear");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
    
  return (
    <>
    {/* <!-- Start Footer Section  --> */}
        <footer className="bg-dark text-white py-4 m-0">
            <div className="container">

                <div className="row">

                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="mb-3">About PTT</h5>
                        <p>PTT Software Project Co., Ltd is a leading software development company dedicated to delivering high-quality solutions to businesses worldwide.</p>
                        <div className="socialicons mt-3">
                            <a href="javascript:void(0);" className="text-white me-2"><FontAwesomeIcon icon="fa-brands fa-facebook-f"></FontAwesomeIcon></a>
                            <a href="javascript:void(0);" className="text-white me-2"><FontAwesomeIcon icon="fa-brands fa-x-twitter"></FontAwesomeIcon></a>
                            <a href="javascript:void(0);" className="text-white me-2"><FontAwesomeIcon icon="fa-brands fa-linkedin-in"></FontAwesomeIcon></a>
                            <a href="javascript:void(0);" className="text-white me-2"><FontAwesomeIcon icon="fa-brands fa-instagram"></FontAwesomeIcon></a>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="javascript:void(0);" className="text-white text-decoration-none">Home</a></li>
                            <li className="mb-2"><a href="javascript:void(0);" className="text-white text-decoration-none">Services</a></li>
                            <li className="mb-2"><a href="javascript:void(0);" className="text-white text-decoration-none">About Us</a></li>
                            <li className="mb-2"><a href="javascript:void(0);" className="text-white text-decoration-none">Pricing</a></li>
                            <li className="mb-2"><a href="javascript:void(0);" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="mb-3">Contact Info</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><FontAwesomeIcon icon="fa-solid fa-location-dot"></FontAwesomeIcon> No.123, Aung San St, Mandalay, Myanmar</li>
                            <li className="mb-2"><FontAwesomeIcon icon="fa-solid fa-phone"></FontAwesomeIcon> +95 9422042225</li>
                            <li className="mb-2"><FontAwesomeIcon icon="fa-solid fa-envelope"></FontAwesomeIcon> info@ptt.com</li>
                            <li className="mb-2"><FontAwesomeIcon icon="fa-solid fa-clock"></FontAwesomeIcon> Mon-Fri: 9AM - 5AM</li>
                        </ul>
                    </div>

                </div>

                <hr className="my-4" />

                <div className="text-center">
                    <p className="mb-0">&copy; <span id="autoyear"></span> PTT Software Project Co.,Ltd. All Rights Reserved.</p>
                </div>
                
            </div>
        </footer>
    {/* <!-- End Footer Section --> */}

    </>
  )
}

export default Footer
