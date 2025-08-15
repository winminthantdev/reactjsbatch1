import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import banner4 from "../assets/img/banner/banner4.jpg"

const ContactPage = ()=>{
  return(
    <main className="bg-dark text-light">
    
        {/* Banner */}
        <section className="text-center d-flex justify-content-center align-items-center" style={{
          minHeight:"70vh",
          backgroundImage:`url(${banner4})`,
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat"
        }}>
        <div className="container bg-dark bg-opacity-50 rounded">
          <h1 className="display-6">Let's Connect</h1>
          <p className="lead">Have questions? Our team is here to help!</p>
        </div>
        </section>
    
        <section className="bg-black tet-white py-5">

          <div className="container">

            <div className="text-center mb-5">
                <h3 className="fw-bold mb-4">What Our Clients Say</h3>
                <p className="lead">Trusted by thousands of customers woldwide</p>
            </div>


            <div className="row g-4">

                <div className="col-lg-4"> 
                  <div className="card h-100 bg-dark border-1 rounded-3">
                    <div className="card-body p-4">
                      <img src="https://randomuser.me/api/portraits/men/10.jpg" className="rounded-circle me-3" />
                      <div>
                        <h5 className="text-light mb-0">Mr.Aung Aung</h5>
                        <p className="text-light">Manager</p>
                      </div>
                    </div>
                    <p className="card-text text-light">"The support team was incredibly responsive..."</p>
                    <div className="text-warning">
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                    </div>
                  </div>
                </div>

            </div>


          </div>
        </section>
    
        <section className="bg-light text-dark py-5">
          <div className="container">
    
            <h3 className="text-center mb-5">Send Us a Message</h3>
    
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form onSubmit="">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="name" className="form-label"></label>
                                <input type="text" name="name" id="name" className="form-control form-control-sm" value=""  onChange="" placeholder="Enter your name" autoFocus required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label"></label>
                                <input type="email" name="email" id="email" className="form-control form-control-sm" value=""  onChange="" placeholder="Enter your eamil" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label"></label>
                                <textarea name="message" id="message" className="form-control form-control-sm" rows="5" value=""  onChange="" placeholder="Write your message here" autoFocus required></textarea>
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary px-4">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

          </div>
        </section>

        <section>
          <div className="container-fluid p-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15273.502815313153!2d96.11287236213687!3d16.857299340812197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194f01a7ca8a3%3A0x427729d4e0e859b2!2sSein%20Gayhar%20(Parami)!5e0!3m2!1sen!2smm!4v1755188249600!5m2!1sen!2smm" 
            width="100%" 
            height="300" 
            style={{border:0}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
    
        </main>
  )
};

export default ContactPage;