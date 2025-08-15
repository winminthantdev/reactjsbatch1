import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import user1 from "./../assets/img/users/user1.jpg"
import user2 from "./../assets/img/users/user2.jpg"
import user3 from "./../assets/img/users/user3.jpg"

const Customers = ()=>{
  return(
    <>
    {/* Start Customer Section */}
        <section className="py-3 customers">
      <div className="container-fluid">
        {/* <!-- start title --> */}
        <div className="text-center mb-3">
          <div className="col">
            <h3 className="text-white titles">What Customers Say?</h3>
          </div>
        </div>
        {/* <!-- end title --> */}

        <div className="row">
          <div className="col-md-6 mx-auto">
            <div id="customercarousels" className="carousel slide" data-bs-ride="carousel">
              <ol className="carousel-indicators">
                <li className="active" data-bs-target="#customercarousels" data-bs-slide-to="0"></li>
                <li data-bs-target="#customercarousels" data-bs-slide-to="1"></li>
                <li data-bs-target="#customercarousels" data-bs-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item text-center active">
                  <img src={user1} className="rounded-circle" alt="user1" />
                  <blockquote className="text-light">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora nisi autem, vero ipsum unde?</p>
                  </blockquote>
                  <h5 className="text-uppercase fw-bold mb-3 text-white">MS.July</h5>
                  <ul className="list-inilne mb-5">
                    {
                      [...Array(5)].map((_,x)=>(
                        
                        <li key={x} className="list-inline-item">
                          <FontAwesomeIcon icon="fas fa-star" className="text-warning" />
                        </li>
                      ))
                    }

                  </ul>
                </div>

                <div className="carousel-item text-center">
                  <img src={user2} className="rounded-circle" alt="user2" />
                  <blockquote className="text-light">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora nisi autem, vero ipsum unde?</p>
                  </blockquote>
                  <h5 className="text-uppercase fw-bold mb-3 text-white">MR.Antom</h5>
                  <ul className="list-inilne mb-5">
                    {
                      [...Array(5)].map((_,x)=>(
                        <li key={x} className="list-inline-item">
                          <FontAwesomeIcon icon="fas fa-star" className="text-warning" />
                        </li>
                      ))
                    }
                  </ul>
                </div>

                <div className="carousel-item text-center">
                  <img src={user3} className="rounded-circle" alt="user" />
                  <blockquote className="text-light">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora nisi autem, vero ipsum unde?</p>
                  </blockquote>
                  <h5 className="text-uppercase fw-bold mb-3 text-white">MS.Yoon</h5>
                  <ul className="list-inilne mb-5">
                  {
                      [...Array(4)].map((_,x)=>(
                        
                        <li key={x} className="list-inline-item">
                          <FontAwesomeIcon icon="fas fa-star" className="text-warning" />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Start Customer Section */}
    </>
  )
};

export default Customers;