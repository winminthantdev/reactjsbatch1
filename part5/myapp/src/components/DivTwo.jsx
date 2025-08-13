// import React from 'react'

//  const DivTwo =({name,age}) =>{
//  return(
//   <div>
//    <p>Hello I am {name}. I am {age} years old.</p>
//   </div>
//  )
// }
//  DivTwo.defaultProps = {
//    name: 'Honey Nway OO',
//    age: 25,
//  }
// export default DivTwo;

// import React from 'react'

// export default function DivTwo ({ name, age }){
//   return (
//     <div>
//       <p>
//         Hello I am {name}. I am {age} years old.
//       </p>
//     </div>
//   )
// }
// DivTwo.defaultProps = {
//   name: 'Honey Nway OO',
//   age: 25,
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

export default class DivTwo extends React.Component{
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

DivTwo.defaultProps = {
  name: 'Honey Nway OO',
  age: 25,
}