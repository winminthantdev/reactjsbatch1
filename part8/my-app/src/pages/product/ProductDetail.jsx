// import React from "react";
// import { useParams } from "react-router-dom";

// function Product(){
//   // node : 'id' should match the froute param name
//   const { name,id } = useParams(); // {id: 1001}
//   // console.log(id);
  
//  return (
//    <div>
//      <h1>Product </h1>
//      <p>Dynamic Routing and Route singe Parameter</p>
//      <p>Route passing data Product Name is {name} </p>
//      <p>Route passing data Product ID is {id} </p>
//    </div>
//  );
// }

// export default Product;


// import React from 'react';
// import { useParams } from 'react-router-dom';

// function Product() {
//   const param = useParams(); // {id: 1001}
//   // console.log(id);

//   return (
//     <div>
//       <h1>Product </h1>
//       <p>Dynamic Routing and Route singe Parameter</p>
//       <p>Route passing data Product Name is {param.name} </p>
//       <p>Route passing data Product ID is {param.id} </p>
//     </div>
//   );
// }

// export default Product;

// ဆက်၇န်ရှိေသး သည်

// 9PD


// import React from 'react';
// import { useParams } from 'react-router-dom';

// function ProductShow({name,id}) {
// console.log('Name = ', name);
// console.log('Id = ', id);


//   return (
//     <div>
//       <h1>Product Detail</h1>
//       <p>Dynamic Routing and Route singe Parameter</p>
//       <p>Route passing data Product Name is {name} </p>
//       <p>Route passing data Product ID is {id} </p>
//     </div>
//   );
// }


// function ProductDetail(){
//   const {name,id} = useParams();
//   return <ProductShow name={name} id={id} />
// }
// export default ProductDetail;


import React from 'react';
import { useParams } from 'react-router-dom';

// Component that displays the product details
function ProductShow({ name, id }) {
  console.log('Name = ', name);
  console.log('Id = ', id);

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Dynamic Routing and Route single Parameter</p>
      <p>Route passing data Product Name is {name}</p>
      <p>Route passing data Product ID is {id}</p>
    </div>
  );
}

// Main ProductDetail component
function ProductDetail() {
  // Extracting the dynamic parameters from the URL using useParams
  const { name, id } = useParams();

  // Passing the extracted parameters as props to ProductShow
  return <ProductShow name={name} id={id} />;
}


export default ProductDetail;