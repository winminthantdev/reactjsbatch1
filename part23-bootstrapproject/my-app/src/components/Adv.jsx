import React,{useState,useEffect} from "react";

import building4 from "../assets/img/etc/building4.png"

const Adv = ()=>{

    const [advAnimation,setAdvAnimation] = useState({
        image:false,
        text:false 
    });

    useEffect(()=>{

        const scrollHandler = () =>{

            const getscrolltop = window.scrollY || document.documentElement.scrollTop;
            // console.log(getscrolltop); 

            setAdvAnimation({
                image:getscrolltop >= 900,
                text:getscrolltop >= 900
            });
        }

        window.addEventListener('scroll',scrollHandler);

        // clean up the event listener when component unmounts 
        return ()=>window.removeEventListener("scroll",scrollHandler);
    
        
    },[advAnimation]);

  return(
    <>
      {/* Start Adv Section */}
            <section className="p-5 missions">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img src={building4} className={`homeimgs advimages ${advAnimation.image ? 'fromlefts' : ''}`} alt="building4" />
                        </div>
                        <div className={`col-lg-7 text-white text-center text-lg-end advtexts ${advAnimation.text ? 'fromrights' : ''}`}>
                            <h1>What is Plannco & how we started our business in Myanmar</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </section>
        {/* End Adv Section */}
    </>
  )
};

export default Adv;