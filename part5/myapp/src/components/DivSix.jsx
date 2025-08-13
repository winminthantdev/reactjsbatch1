// import React from 'react'

// export default function DivSix() {
//   const x = 30
//   const y = 20
//   const z = '20' //can't calclate
//   return (
//     <div>
//       <p>{100 + 500}</p>
//       <p>{100 + 500 + x}</p>
//       <p>{100 + 500 + y}</p>
//       <p>{100 + 500 + z}</p>
//       <p>{x < y ? 'Yes, x is less than y' : `No, x isn't less than y`}</p>
//     </div>
//   )
// }

// import React from 'react'

// export default class DivSix extends React.Component{
//  render()
// {
//  const x = 30
//  const y = 20
//  const z = '20' //can't calclate
//   return (
//     <div>
//       <p>{100 + 500}</p>
//       <p>{100 + 500 + x}</p>
//       <p>{100 + 500 + y}</p>
//       <p>{100 + 500 + z}</p>
//       <p>{x < y ? 'Yes, x is less than y' : `No, x isn't less than y`}</p>
//     </div>
//   )}
// }

import React from 'react'

export default class DivSix extends React.Component {
  state = {
    x: 10,
    y: 20,
    z: '20',
  }
  render() {
    return (
      <div>
        <p>{100 + 500}</p>
        <p>{100 + 500 + this.state.x}</p>
        <p>{100 + 500 + this.state.y}</p>
        <p>{100 + 500 + this.state.z}</p>
        <p>
          {this.state.x < this.state.y
            ? 'Yes, x is less than y'
            : `No, x isn't less than y`}
        </p>
      </div>
    )
  }
}
