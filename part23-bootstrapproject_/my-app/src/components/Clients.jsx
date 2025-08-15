import React, { useEffect,useState } from "react";

const Services = ()=>{

  const [clientImages , setClientImages] = useState({});

  useEffect(()=>{
        
    const importclientimages = async()=>{

      try{

        const imageModules = await Promise.all([ 
          import("../assets/img/clients/client1.png"),
          import("../assets/img/clients/client2.png"),
          import("../assets/img/clients/client3.png"),
          import("../assets/img/clients/client4.png"),
          import("../assets/img/clients/client5.png")
        ]);

        // console.log(imageModules); // (6) [Module, Module, Module, Module, Module, Module]
        // console.log(imageModules[0].default); // /src/assets/img/clients/client1.png

        setClientImages({
          client1:imageModules[0].default,      // client1:"/src/assets/img/clients/client1.png"
          client2:imageModules[1].default,
          client3:imageModules[2].default,
          client4:imageModules[3].default,
          client5:imageModules[4].default
        });


      }catch(err){
        console.err("Error loading images : ",err);

      }
    }

    importclientimages();

    // console.log( import("../assets/img/gallery/image1.jpg")); // Promise {<pending>}

  },[]);


  // console.log(Object.keys(clientImages)); // (6) ['client1', 'client2', 'client3', 'client4', 'client5']
  // console.log(Object.entries(clientImages)); // (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]

  if(Object.keys(clientImages).length === 0){
    return <div className="text-center py-5">Loading images.....</div>
  }

  return(
    <>

      {/* Start Client Section */}
            <section className="p-3">
                <div className="container-fluid">

                    {/* start title */}
                        <div className="text-center">
                            <div className="col">
                                <h3 className="titles">Satisfied Clients</h3>
                            </div>
                        </div>
                    {/* end title */}


                <div className="row">
                    <div className="col-md-12">
                        <ul className="clientlists">

                          {/* {
                            Object.keys(clientImages).map((key,idx)=>(
                              <li key={idx}>
                                <img src={clientImages[key]} alt={key} />
                              </li>
                            ))
                          } */}



                          {
                            Object.entries(clientImages).map(([key,src])=>(
                              <li key={key}>
                                <img src={src} alt={key} />
                              </li>
                            ))
                          }

                        </ul>

                    </div>

                </div>

                </div>
            </section>
      {/* End Client Section */}
    </>
  )
};

export default Services;