import React from "react";
import { useParams } from "react-router-dom";

function Product(){
  // node : 'id' should match the froute param name
  const {id} = useParams(); // {id: 1001}
  // console.log(id);
  
 return (
   <div>
     <h1>Product </h1>
     <p>Dynamic Routing and Route singe Parameter</p>
     <p>Route passing data is {id}</p>
   </div>
 );
}

export default Product;