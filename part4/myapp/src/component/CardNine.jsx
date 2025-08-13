// import React from 'react'

// export default function CardNine(){
//  let count = 1;
//  const handleClick =() =>{
//   count ++;
//   console.log(count); //incremented in consolg , dom ui don't increance
  
//  }
//  return (
//   <div>
//    <p>{count}</p>
//    <button onClick={handleClick}>Click me</button>
//   </div>
//  )
// }

import React from 'react'

export default class CardNine extends React.Component{
render() {
  let count = 1
  const handleClick = () => {
    count++
    console.log(count) //incremented in consolg , dom ui don't increance
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
}