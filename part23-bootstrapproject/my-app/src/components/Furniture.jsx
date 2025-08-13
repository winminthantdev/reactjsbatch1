import React from "react";

import service1 from './../assets/img/icon/services1.png';
import service2 from './../assets/img/icon/services2.png';
import service3 from './../assets/img/icon/services2.png';
import service4 from './../assets/img/icon/services4.png';
import service5 from './../assets/img/icon/services5.png';
import service6 from './../assets/img/icon/services6.png';

const Furniture = ()=>{

  const services = [
    {
      id:1,
      image:service1,
      title:"Fast service",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, accusantium."
    },
    {
      id:2,
      image:service2,
      title:"Secure payments",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, accusantium."
    },
    {
      id:3,
      image:service3,
      title:"Expert team",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, accusantium."
    },
    {
      id:4,
      image:service4,
      title:"Affordable services",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, accusantium."
    },
    {
      id:5,
      image:service5,
      title:"90 Days warranty",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, accusantium."
    },
    {
      id:6,
      image:service6,
      title:"Award winning",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, accusantium."
    },
]

  return(
    <>
        {/*  start Furniture section  */}
    <section className="bg-light text-center py-3">
      <div className="container">
        {/*  start title  */}
        <div className="text-center mb-3">
          <div className="col">
            <h3 className="titles">Furnitue Services</h3>
            <p className="lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia laborum magni sed, ab mollitia quod iusto odit. Maiores, repellendus animi.</p>
          </div>
        </div>
        {/*  end title  */}

        <div className="row furicons">
          
          {
            services.map((service)=>(
              <div className="col-md-4">
                <img src={service.image} alt={service.title} />
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>

    {/* end Furniture section  */}
    </>
  )
};

export default Furniture;