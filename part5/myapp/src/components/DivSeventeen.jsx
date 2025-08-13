// import React, { useState } from 'react'

// const DivSeventeen = () => {
//   const init = {
//     firstname: '',
//     lastname: '',
//     city: '',
//   }
//   const [formState, setFormState] = useState(init)

//   const changeHandler = (e) => {
//     //console.log(e.target);
//     //console.log(e.target.name);
//     //console.log(e.target.id);
//     //console.log(e.target.value);

//     //console.log(formState);

//     setFormState({
//       ...formState, //spread operator
//       [e.target.id]: e.target.value,
//     })

//     console.log(formState)
//   }
//   const submitHandler = (e) => {
//     console.log(formState)
//     e.preventDefault()
//   }
//   const handleClickClear = (e) => {
//     setFormState(init)
//     e.preventDefault();
//   }

//   return (
//     <form action='' method='' onSubmit={submitHandler}>
//       <div>
//         <label htmlFor='firstname'>First Name</label>
//         <input
//           type='text'
//           name='firstname'
//           id='first'
//           value={init.firstname}
//           onChange={changeHandler}
//         />
//         <span>{formState.firstname}</span>
//       </div>

//       <div>
//         <label htmlFor='lastname'>Last Name</label>
//         <input
//           type='text'
//           name='lastname'
//           id='last'
//           value={init.lastname}
//           onChange={changeHandler}
//         />
//         <span>{formState.lastname}</span>
//       </div>

//       <div>
//         <label htmlFor='city'>City</label>
//         <input
//           type='text'
//           name='city'
//           id='address'
//           value={init.city}
//           onChange={changeHandler}
//         />
//         <span>{formState.city}</span>
//       </div>
//       <button type='botton' onClick={handleClickClear}>
//         Clear
//       </button>
//       <button type='submit'>Submit</button>
//     </form>
//   )
// }

// export default DivSeventeen

import React from 'react'

class DivSeventeen extends React.Component {
  inits = {
    firstname: '',
    lastname: '',
    city: '',
    bio: '',
    gender: '',
    agree: false,
  }
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      city: '',
      bio: '',
      gender: '',
      agree: false,
    }
  }

  render() {
    const loaddatas = {
      firstname: 'Kyaw',
      lastname: 'Kyaw',
      city: 'Yangon',
      bio: 'Hello sir',
      gender: '1',
      agree: false,
    }
    const changeHandler = (e) => {
      //console.log(e.target);
      //console.log(e.target.name);
      //console.log(e.target.id);
      //console.log(e.target.value);

      //console.log(formState);

      this.setState({
        [e.target.name]: e.target.value,
      })
      //console.log(this.state);
    }
    const submitHandler = (e) => {
      console.log(this.state)
      e.preventDefault()
    }

    const clickHandler = () => {
      this.setState = {
        inits,
      }
    }
    const handleLoadBtn = () => {
      this.setState = {
        loaddatas,
      }
    }

    const defaultValue = 'Choose Your Country'
    return (
      <form action='' method='' onSubmit={submitHandler}>
        <div>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            name='firstname'
            id='first'
            value={this.state.firstname}
            onChange={changeHandler}
          />
          <span>{this.state.firstname}</span>
        </div>

        <div>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            name='lastname'
            id='last'
            value={this.state.lastname}
            onChange={changeHandler}
          />
          <span>{this.state.lastname}</span>
        </div>

        <div>
          <label htmlFor='city'>City</label>
          <select
            name='city'
            id='address'
            value={this.state.city}
            onChange={changeHandler}
          >
            <option disabled>{defaultValue}</option>
            <option value='mm'>Myanmar</option>
            <option value='th'>Thai</option>
            <option value='in'>India</option>
            <option value='cha'>China</option>
          </select>
          <span>{this.state.city}</span>
        </div>

        <button onClick={handleLoadBtn}>Load</button>
        <button type='button' onClick={clickHandler}>
          Clear
        </button>
        <button type='submit'>Save</button>
      </form>
    )
  }
}

export default DivSeventeen
//
