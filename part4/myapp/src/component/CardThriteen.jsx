// import React, { useState } from 'react'

// export default function CardThirteen(){
//   const namearrs = useState(0);
//   const nameState = namearrs[0]
//   const setNameState = namearrs[1]

//   const handleChange = (e) => {
//     setNameState(e.target.value)
//   }

//   const dblock = {
//     display: 'block'
//   }
//   return (
//     <div>
//       <label htmlFor="name" style={dblock} >Hello {nameState}</label>
//       <input type="text"  style={dblock} onChange={handleChange} />
//     </div>
//   )
// }

import React from 'react'

export default class CardThirteen extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  render() {
    const dblock = {
      display: 'block',
    }
    return (
      <div>
        <label style={dblock}>Hello {this.state.name}</label>
        <input type='text' style={dblock} onChange={this.handleChange} />
      </div>
    )
  }
}
