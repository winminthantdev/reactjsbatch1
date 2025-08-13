// import React from 'react'

// export default function DivOne(props){
//  return(
//   <div>
//    <p>Hello I am {props.name}. I am {props.age} years old.</p>
//   </div>
//  )
// }


// import React from 'react'

// export default class DivOne extends React.Component{
 
//  render() {
//   return (
//       <p>Hello I am {this.props.name}. I am {this.props.age} years old.</p>
//   )
//  }
// }


import React from 'react'

export default class DivOne extends React.Component{
 constructor(props){
  super(props)
  this.state = {
   name: this.props.name,
   age: this.props.age
 }
 }
 render() {
  return (
      <p>Hello I am {this.state.name}. I am {this.state.age} years old.</p>
  )
 }
}