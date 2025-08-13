import React, { useState } from 'react'

export default function CardEleven() {
  const [counterState, setCounterState] = useState(0)
  // const counterState = counter[0]
  // const setCounterState = counter[1]

  const handleClick = () => {
    setCounterState(counterState + 1)
  }
  return (
    <div>
      <p>{counterState}</p>
      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

// import React from 'react'

// class CardTen extends React.Component {
//   // constructor() {
//   //   super()
//   //   this.state = {
//   //     counter: 1,
//   //   }
//   // }

//   state =  {
//    counter : 10
//   }
//   handleClick = () => {
//     this.state.counter++
//     this.setState({
//       counter: this.state.counter,
//     })
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={this.handleClick}>Add Now</button>
//       </div>
//     )
//   }
// }

// export default CardTen

// import React from 'react'

// class CardTwelve extends React.Component {
//   // constructor() {
//   //   super()
//   //   this.state = {
//   //     counter: 1,
//   //   }
//   // }

//   state = {
//     counter: 10,
//   }
//   render() {
//     const handleClick = () => {
//       this.state.counter++
//       this.setState({
//         counter: this.state.counter,
//       })
//     }
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={handleClick}>Add Now</button>
//       </div>
//     )
//   }
// }

// export default CardTwelve
