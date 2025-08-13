import React, { useState } from 'react'

const DivSisten = () => {
  const init = {
    firstname: '',
    lastname: '',
    city: '',
    bio: '',
  }
  const [formState, setFormState] = useState(init)

  const changeHandler = (e) => {
    //console.log(e.target);
    //console.log(e.target.name);
    //console.log(e.target.id);
    //console.log(e.target.value);

    //console.log(formState);

    setFormState({
      ...formState, //spread operator
      [e.target.id]: e.target.value,
    })

    console.log(formState)
  }
  const submitHandler = (e) => {
    console.log(formState)
    e.preventDefault()
  }
  const handleClickClear = (e) => {
    setFormState(init)
    e.preventDefault()
  }


  const defaultValue = 'Chooose your country'
  return (
    <form action='' method='' onSubmit={submitHandler}>
      <div>
        <label htmlFor='firstname'>First Name</label>
        <input
          type='text'
          name='firstname'
          id='first'
          value={init.firstname}
          onChange={changeHandler}
        />
        <span>{formState.firstname}</span>
      </div>

      <div>
        <label htmlFor='lastname'>Last Name</label>
        <input
          type='text'
          name='lastname'
          id='last'
          value={formState.lastname}
          onChange={changeHandler}
        />
        <span>{formState.lastname}</span>
      </div>

      <div>
        <label htmlFor='country'>Country</label>
        <select
          name='country'
          id='country'
          value={formState.country}
          onChange={changeHandler}
        >
          <option disabled>{defaultValue}</option>
          <option value='mm'>Myanmar</option>
          <option value='th'>Thai</option>
          <option value='in'>India</option>
          <option value='ch'>China</option>
        </select>

        <span>{formState.country}</span>
      </div>

      <div>
        <label htmlFor='bio'>Bio</label>
        <textarea
          name='bio'
          id='bio'
          value={formState.bio}
          onChange={changeHandler}
        />
        <span>{formState.bio}</span>
      </div>

      <div>
        <label htmlFor='gender'>Gender</label>
        <input
          type='radio'
          name='gender'
          id='genderm'
          onChange={changeHandler}
          value='1'
          checked={formState.gender}
        />
        <label htmlFor='genderm'>Male</label>
        <input
          type='radio'
          name='gender'
          id='genderfm'
          onChange={changeHandler}
          value='1'
          checked={formState.gender}
        />
        <label htmlFor='genderfm'>Male</label>
      </div>
      <div>
        <label htmlFor='agree'>Agree</label>
        <input
          type='chckbox'
          name='agree'
          id='agree'
          onChange={changeHandler}
          checked={formState.agree}
        />
      </div>
      <button type='button' onClick={handleClickClear}>
        Clear
      </button>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default DivSisten

// import React from 'react'

// class DivFourteen extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       firstname: '',
//       lastname: '',
//       city: '',
//     }
//   }

//   render() {
//     const changeHandler = (e) => {
//       //console.log(e.target);
//       //console.log(e.target.name);
//       //console.log(e.target.id);
//       //console.log(e.target.value);

//       //console.log(formState);

//       this.setState({
//         [e.target.name]: e.target.value,
//       })
//       //console.log(this.state);
//     }
//     const submitHandler = (e) => {
//       console.log(this.state)
//       e.preventDefault()
//     }

//     const clickHandler = () => {
//       this.setState = {
//         firstname: '',
//         lastname: '',
//         city: '',
//       }
//     }
//     return (
//       <form action='' method='' onSubmit={submitHandler}>
//         <div>
//           <label htmlFor='firstname'>First Name</label>
//           <input
//             type='text'
//             name='firstname'
//             id='first'
//             value={this.state.firstname}
//             onChange={changeHandler}
//           />
//           <span>{this.state.firstname}</span>
//         </div>

//         <div>
//           <label htmlFor='lastname'>Last Name</label>
//           <input
//             type='text'
//             name='lastname'
//             id='last'
//             value={this.state.lastname}
//             onChange={changeHandler}
//           />
//           <span>{this.state.lastname}</span>
//         </div>

//         <div>
//           <label htmlFor='city'>City</label>
//           <input
//             type='text'
//             name='city'
//             id='address'
//             value={this.state.city}
//             onChange={changeHandler}
//           />
//           <span>{this.state.city}</span>
//         </div>
//         <button type='button' onClick={clickHandler}>
//           Clear
//         </button>
//         <button type='submit'>Save</button>
//       </form>
//     )
//   }
// }

// export default DivFourteen
// //
