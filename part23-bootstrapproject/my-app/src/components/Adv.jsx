import React, { useEffect, useState } from "react";

import building4 from "../assets/img/etc/building4.png"

const Adv = ()=>{

    const [advanimation,setAdvAnimation] = useState({
        image:false,
        text:false
});

useEffect(()=>{

    const scrollHandler = ()=>{

        const getscrolltop = document.documentElement.scrollTop;
        // console.log(getscrolltop);

        setAdvAnimation({
            image:getscrolltop >= 900,
            text:getscrolltop >= 900
        });
    }

     window.addEventListener("scroll",scrollHandler);
    
    // clean up the event listener when component unmounts
    return ()=>window.removeEventListener("scroll",scrollHandler)
    
},[advanimation])


  return(
    <>
      {/* Start Adv Section */}
        <section className="py-5 missions">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5">
                    <img src={building4} className={`homeimages advimages ${advanimation.image ? 'fromlefts' : ''}`} alt="building4" />
                </div>

                <div className={`col-lg-7 text-white text-center text-lg-end ${advanimation.text ? 'fromrights' : ''} advtexts`}>
                    <h1>What is Plannco & how we started our business in Myanmar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse quidem nam eveniet, possimus necessitatibus in quod voluptas explicabo consequatur. Autem eveniet corporis at, praesentium, voluptatum vero nam dolores provident esse adipisci nisi consectetur. Magni dolorum autem facilis odio vel, aperiam excepturi quibusdam porro, omnis culpa, rerum et quia adipisci facere voluptatum labore ut? Ipsa, animi incidunt! Officiis sapiente molestiae amet impedit consequuntur rem, quibusdam laboriosam sint deleniti odio fuga.</p>
                </div>
                </div>
            </div>
        </section>
        {/* End Adv Section */}
    </>
  )
};

export default Adv;