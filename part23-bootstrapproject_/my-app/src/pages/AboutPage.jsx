import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import banner3 from "../assets/img/banner/banner3.jpg"
import { useState } from "react";
import { useEffect } from "react";

const AboutPage = ()=>{

  const [whyChooseUs, setWhyChooseUs] = useState([]);
  const [coreValues, setCoreValues] = useState([]);
  const [loading,setloading]  = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{

    const fetchAboutUs = async()=>{

      try {
        
        const response = await fetch("http://localhost:5000/api/aboutus")
        // console.log(response);

        if(!response.ok){
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data.whyChooseUs);

        setWhyChooseUs(data.whyChooseUs || []);
        setCoreValues(data.coreValues || []);

      } catch (error) {
          setError(error.message);
      }finally{
      setloading(false);
    }

    }

    fetchAboutUs()
    

  },[]);

  if(loading) return <p className="text-center text-light py-5">Loading...</p>
  if(error) return <p className="text-center text-light py-5">Error : {error}</p>

  return(
    <main className="bg-dark text-light">
      {/* Banner  */}
      <section className="text-center d-flex justify-content-center align-items-center" style={{
        minHeight: "70vh",
        backgroundImage: `url(${banner3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="container bg-dark bg-opacity-50 rounded">
          <h1 className="display-6">About Our Company</h1>
          <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h3 className="mb-4">Why Choose Us?</h3>
          <div className="row">

            {
              whyChooseUs.map((item,idx)=>(
                 <div key={idx} className="col-md-4 mb-4">
                    <div className="display-4 mb-3">
                      <FontAwesomeIcon icon={item.icon} className="text-warning" />
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="bg-secondary py-5">
        <div className="container text-center">
          <h3>Our Core Values</h3>
          <div className="row">

            {
              coreValues.map((core,idx)=>(
                  <div key={idx} className="col-md-3 mb-4">
                    <div className="bg-dark rounded shadow h-100 p-3">
                      <h5>{core.title}</h5>
                      <p>{core.description}</p>
                    </div>
                  </div>
              ))
            }

          </div>
        </div>
      </section>
    </main>
  )
};

export default AboutPage;


// 7AP