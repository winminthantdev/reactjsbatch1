import React from "react";

import staffGirls from  "../assets/img/users/staffgirl1.png";


const AboutUs = () => {
  return (
    <>
      {/* <!-- start about us section --> */}
      <section class="py-5 aboutuss">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <img src={staffGirls} alt="staffgirl1" />
            </div>
            <div class="col-sm-6 text-white">
              <div class="col-md-12">
                <h2 class="tet-uppercase">Who are we !!!</h2>
                <div class="lines"></div>
                <div class="lines"></div>
                <div class="lines"></div>
              </div>
              <h5>
                <i>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam, tenetur?
                </i>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, voluptas doloribus. Reprehenderit, molestiae.
                Incidunt, porro eius. Labore sequi ullam error qui, corrupti
                reprehenderit fugit similique cum quis non. Autem, cumque hic
                quasi possimus culpa accusamus, molestiae voluptatem repellendus
                qui porro ad. Placeat dolorum mollitia facilis, nobis voluptate
                rem ipsam? At?
              </p>
              <a href="javascript:void(0);" class="btn btn-danger rounded-0">
                Read Me
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!--end about us section --> */}
    </>
  );
};

export default AboutUs;


// 3FT