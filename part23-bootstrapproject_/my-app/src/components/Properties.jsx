import React, { useState } from "react";
// import  { useEffect} from "react"
// import $ from 'jquery'

import "lightbox2/dist/css/lightbox.min.css"         
import "lightbox2/dist/js/lightbox.min.js"


// import all imgages
import image1 from "../assets/img/gallery/image1.jpg"
import image2 from "../assets/img/gallery/image2.jpg"
import image3 from "../assets/img/gallery/image3.jpg"
import image4 from "../assets/img/gallery/image4.jpg"
import image5 from "../assets/img/gallery/image5.jpg"
import image6 from "../assets/img/gallery/image6.jpg"
import image7 from "../assets/img/gallery/image7.jpg"
import image8 from "../assets/img/gallery/image8.jpg"
import image9 from "../assets/img/gallery/image9.jpg"

const Properties = () => {

  const properties = [
    {id:1,image:image1,category:"house",title:"Modern House"},
    {id:2,image:image2,category:"house",title:"Country House"},
    {id:3,image:image3,category:"house",title:"Modern House"},
    {id:4,image:image4,category:"decoration",title:"Living House"},
    {id:5,image:image5,category:"decoration",title:"Modern House"},
    {id:6,image:image6,category:"decoration",title:"Modern House"},
    {id:7,image:image7,category:"furniture",title:"Modern House"},
    {id:8,image:image8,category:"furniture",title:"Modern House"},
    {id:9,image:image9,category:"furniture",title:"Modern House"},
    {id:10,image:image1,category:"office",title:"Modern House"},
    {id:11,image:image2,category:"office",title:"Conference Room"},
    {id:12,image:image3,category:"office",title:"Executive Office"},
    {id:13,image:image4,category:"decoration",title:"Bedroom"},
    {id:14,image:image5,category:"decoration",title:"Living Room"},
    {id:15,image:image6,category:"house",title:"Country House"},
    {id:16,image:image7,category:"furniture",title:"Bed Frame"}
  ]

  const listfilters = ["all", 'house','decoration','furniture', 'office']

  const [activeFilter, setActiveFilter] = useState("all")


  // Filter properties based on active or filter category

  const filterproperties = activeFilter === "all" ? properties : properties.filter(propertie => propertie.category === activeFilter)


      // useEffect(()=>{
      //       $('.titles').css('color','red');
      // },[])

  return (
    <>
      {/* <!-- start property section --> */}
      <section class="py-5">
        <div class="cotainer-fluid">
          {/* <!-- start title --> */}
          <div class="text-center mb-3">
            <div class="rol">
              <h3 class="titles">Properties</h3>
            </div>
          </div>
          {/* <!-- end title --> */}
          <ul class="list-inilne text-center text-uppercase fw-bold">
            {/* <li
              class="list-inline-item propertylists activeitems"
              data-filter="all"
            >
              All <span class="mx-3 mx-md-5 text-muted">/</span>
            </li>
            <li class="list-inline-item propertylists" data-filter="house">
              House <span class="mx-3 mx-md-5 text-muted">/</span>
            </li>
            <li class="list-inline-item propertylists" data-filter="decoration">
              Decoration <span class="mx-3 mx-md-5 text-muted">/</span>
            </li>
            <li class="list-inline-item propertylists" data-filter="furniture">
              Furnitue <span class="mx-3 mx-md-5 text-muted">/</span>
            </li>
            <li class="list-inline-item propertylists" data-filter="office">
              Office
            </li> */}
            {
              listfilters.map((listfilter,idx)=>(
                <li key={idx} className={`list-inline-item propertylists ${activeFilter === listfilter ? 'activeitems' : ''}`} onClick={()=>setActiveFilter(listfilter)}>
                {listfilter}
                {listfilter !== "office" && <span class="mx-3 mx-md-5 text-muted">/</span>}
              </li>
              ))
            }

          </ul>
          <div className="container-fluid">
            <div class="d-flex flex-wrap justify-content-center">
            {filterproperties.map(property=>(
              <div key={property.id} className={`filters ${property.category}`}>
                 <a href={property.image} data-lightbox="property" data-title={property.title} >
                  <img src={property.image} width="200px" alt={property.title} />
                </a>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* <!--end property section --> */}
    </>
  );
};

export default Properties;
