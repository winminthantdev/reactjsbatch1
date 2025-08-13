import React from "react";

import image1 from './../assets/img/gallery/image1.jpg'
import image2 from './../assets/img/gallery/image2.jpg'
import image3 from './../assets/img/gallery/image3.jpg'
import image4 from './../assets/img/gallery/image4.jpg'
import image5 from './../assets/img/gallery/image5.jpg'
import image6 from './../assets/img/gallery/image6.jpg'

const services = [
  {id: 1, image: image1, roomName : 'living room'},
  {id: 2, image: image2, roomName : 'mini room'},
  {id: 3, image: image3, roomName : 'dining room'},
  {id: 4, image: image4, roomName : 'meeting room'},
  {id: 5, image: image5, roomName : 'bed room'},
  {id: 6, image: image6, roomName : 'pantry room'},
]


const Services = () => {
  return (
    <>
      {/* <!-- start Services section --> */}
      <section class="p-4 services">
        <div class="container-fluid">
          {/* <!-- start title --> */}
          <div class="text-center mb-3">
            <div class="col">
              <h3 class="text-white titles">Our Services</h3>
              <p class="text-light lead mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                corrupti porro nihil dolorem id temporibus beatae voluptate
                ratione consequuntur voluptatem.
              </p>
            </div>
          </div>
          {/* <!-- end title --> */}

          <div class="row">

            {}
            <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div class="card border-0 servicescards">
                <img src="./assets/img/gallery/image1.jpg" alt="image1" />
                <h5 class="text-white text-uppercase fw-bold p-2 headings">
                  Living Room
                </h5>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div class="card border-0 servicescards">
                <img src="./assets/img/gallery/image2.jpg" alt="image2" />
                <h5 class="text-white text-uppercase fw-bold p-2 headings">
                  Mini Bar
                </h5>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div class="card border-0 servicescards">
                <img src="./assets/img/gallery/image3.jpg" alt="image3" />
                <h5 class="text-white text-uppercase fw-bold p-2 headings">
                  Dining Room
                </h5>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div class="card border-0 servicescards">
                <img src="./assets/img/gallery/image4.jpg" alt="image4" />
                <h5 class="text-white text-uppercase fw-bold p-2 headings">
                  Meeting Room
                </h5>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div class="card border-0 servicescards">
                <img src="./assets/img/gallery/image5.jpg" alt="image5" />
                <h5 class="text-white text-uppercase fw-bold p-2 headings">
                  Bed Room
                </h5>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div class="card border-0 servicescards">
                <img src="./assets/img/gallery/image6.jpg" alt="image6" />
                <h5 class="text-white text-uppercase fw-bold p-2 headings">
                  Pantry Room
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--end Services section --> */}
    </>
  );
};

export default Services;
