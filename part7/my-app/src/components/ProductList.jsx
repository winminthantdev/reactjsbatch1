import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function ProductList(){

  //  for single/multi for each query reault
  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  console.log(searchParams.get('q'));

  console.log(searchParams.get('keyword'));
  console.log(searchParams.get('batch'));
  console.log(searchParams.get('fee'));

  // for multi concate search query result
  // const location = useLocation();
  // console.log(location);
  // console.log(location.search);
  


 return (
   <div>
     <h1>Product </h1>
     <p>Dynamic Routing and Route singe Parameter</p>
   </div>
 );
}

export default ProductList;