// import React, { useState } from 'react'

// const  DivSeven  = () => {

//  const[counter, setCounter] = useState(0);

//  const handleClick = () =>{
//   setCounter(counter + 1)
//  }
//  return (
//   <div>
//    <Counterview idx={counter} clicker={handleClick}/>
//   </div>
//  )
// }

// const Counterview = (props) => {
// return (
//  <div>
//   <p>{props.idx}</p>
//   <button onClick={props.clicker}>Press me</button>
//  </div>
// )
// }


// export default DivSeven;


// import React, { useState } from 'react'

// const DivSeven = () => {
//   const [counter, setCounter] = useState(0)

//   const handleClick = () => {
//     setCounter(counter + 1)
//   }
//   return (
//     <div>
//       <Counterview idx={counter} clicker={handleClick} />
//     </div>
//   )
// }

// const Counterview = (props) => {
//  const {idx,clicker} = props
//   return (
//     <div>
//       <p>{idx}</p>
//       <button onClick={clicker}>Press me</button>
//     </div>
//   )
// }


import React from 'react'

class  DivSeven extends React.Component{

constructor(){
 super();
 this.state = {
  counter : 0
 }
}



 render() {
   const handleClick = () => {

    this.state.counter++;
    this.setState({
     counter : this.state.counter
    })
   }
   return (
     <div>
       <Counterview idx={this.state.counter} clicker={handleClick} />
     </div>
   )
 }

 }


const Counterview = (props) => {
  const { idx, clicker } = props
  return (
    <div>
      <p>{idx}</p>
      <button onClick={clicker}>Press me</button>
    </div>
  )
}


export default DivSeven