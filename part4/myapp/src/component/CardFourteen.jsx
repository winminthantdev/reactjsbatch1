// import React, { useState } from 'react'

// export default function CardFourteen() {

//  const [firstname,setFirstname] = useState();
//  const [lastname, setLastname] = useState();

//   const handlefirstnamechange = (e) => {
//     setFirstname(e.target.value)
//   }

//     const handlelastnamechange = (e) => {
//       setLastname(e.target.value)
//     }

//   return (
//     <div>
//       <form action='' method=''>
//         <div>
//           <label htmlFor='firstname'>First Name</label>
//           <input
//             type='text'
//             name='firstname'
//             id='firstname'
//             onChange={handlefirstnamechange}
//           />
//           <span>{firstname}</span>
//         </div>
//         <div>
//           <label htmlFor='lastname'>Last Name</label>
//           <input
//             type='text'
//             name='lastname'
//             id='lastname'
//             onChange={handlelastnamechange}
//           />
//           <span>{lastname}</span>
//         </div>
//       </form>
//     </div>
//   )
// }

import React from 'react'

export default class CardFourteen extends React.Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  render() {
    const handlefirstnamechange = (e) => {
      this.setState({
        firstname: e.target.value,
      })
    }

    const handlelastnamechange = (e) => {
      this.setState({
        lastname: e.target.value,
      })
    }
    return (
      <div>
        <form action='' method=''>
          <div>
            <label htmlFor='firstname'>First Name</label>
            <input
              type='text'
              name='firstname'
              id='firstname'
              onChange={handlefirstnamechange}
            />
            <span>{this.state.firstname}</span>
          </div>
          <div>
            <label htmlFor='lastname'>Last Name</label>
            <input
              type='text'
              name='lastname'
              id='lastname'
              onChange={handlelastnamechange}
            />
            <span>{this.state.lastname}</span>
          </div>
        </form>
      </div>
    )
  }
}
