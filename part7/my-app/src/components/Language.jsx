import React from "react";
import { Outlet } from "react-router-dom";

function Language(){
 return (
   <div>
     <h1>Language</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quis.</p>

     <Outlet/>
    
   </div>
 );
}

export default Language;