import React, { useEffect,useState } from "react";

const Services = ()=>{

  const [images , setImages] = useState({});

  useEffect(()=>{
        
    const importimages = async()=>{

      try{

        const imageModules = await Promise.all([ 
          import("../assets/img/gallery/image1.jpg"),
          import("../assets/img/gallery/image2.jpg"),
          import("../assets/img/gallery/image3.jpg"),
          import("../assets/img/gallery/image4.jpg"),
          import("../assets/img/gallery/image5.jpg"),
          import("../assets/img/gallery/image6.jpg")
        ]);

        // console.log(imageModules); // (6) [Module, Module, Module, Module, Module, Module]
        // console.log(imageModules[0].default); // /src/assets/img/gallery/image1.jpg

        setImages({
          image1:imageModules[0].default,   // image1 : "/src/assets/img/gallery/image1.jpg"
          image2:imageModules[1].default,
          image3:imageModules[2].default,
          image4:imageModules[3].default,
          image5:imageModules[4].default,
          image6:imageModules[5].default,
        });


      }catch(err){
        console.err("Error loading images : ",err);

      }
    }

    importimages();

    // console.log( import("../assets/img/gallery/image1.jpg")); // Promise {<pending>}


  },[]);


  const datas = [
    {
      imgname:'image1',
      roomname:"Living Room"
    },
    {
      imgname:'image2',
      roomname:"Mini Bar"
    },
    {
      imgname:'image3',
      roomname:"Dinning Room"
    },
    {
      imgname:'image4',
      roomname:"Meeting Room"
    },
    {
      imgname:'image5',
      roomname:"Bed Room"
    },
    {
      imgname:'image6',
      roomname:"Pantry Room"
    }
  ];


  // console.log(Object.keys(images)); // (6) ['image1', 'image2', 'image3', 'image4', 'image5', 'image6']

  if(Object.keys(images).length === 0){
    return <div className="text-center py-5">Loading images.....</div>
  }

  return(
    <>

      {/* Start Services Section */}
            <section className="services py-4">
                <div className="container-fluid">
                    {/* start title */}
                    <div className="text-center">
                        <div className="col">
                            <h3 className="titles  text-white">Our Services</h3>
                            <p className="lead text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    {/* end title */}

                  <div className="row">
                      {
                        datas.map((data,idx)=>(
                          <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div className="card border-0 servicecards">
                              <img src={images[data.imgname]} alt="image1" />
                              <h5 className="text-white text-uppercase fw-bold p-2 headings">{data.roomname}</h5>
                            </div>
                          </div>
                        ))
                      }
                      
                  </div>


                </div>
            </section>
        {/* End Services Section */}

    </>
  )
};

export default Services;