// import React, { useState } from 'react'

// export default function CardTen() {
//  let counter = 1;
//  const counterarr = useState(0);

//  const counterState = counterarr[0]
//  const setCounterState = counterarr[1]

//  const handleClick = () =>{

//   // console.log("Clicked Me!");
//   // counter ++;
//   // console.log(counter);

//   setCounterState(counterState + 1)
  
  
//  }
//  return (
//    <div>
//      {/* <p>{counter}</p> */}
//      <p>{counterarr}</p>
//      <button onClick={handleClick}>Add Now</button>
//    </div>
//  )
// }


// import React from 'react'

//  class CardTen extends React.Component{

//   constructor(){
//     super();
//     this.state = {
//      counter : 1
//     }
//   }
  
//   handleClick = () => {
//    this.state.counter ++;
//  // console.log(this.state.counter);
//  this.setState({counter : this.state.counter})
 
// }
// render() {
//    return (
//     <div>
//      <p>{this.state.counter}</p>
//      <button onClick={this.handleClick}>Add Now</button>
//     </div>
//    )
//   }
//  }


// export default CardTen;

import React from 'react'

class CardTen extends React.Component{

 constructor(){
  super();
  this.state = {
   counter: 1
  }
 }
 handleClick = () =>{
  this.state.counter ++
  this.setState({
   counter: this.state.counter
  })
 }
 render(){
  return (
   <div>
    <p>{this.state.counter}</p>
    <button onClick={this.handleClick}>Add Now</button>
   </div>
  )
 }
}

export default CardTen;