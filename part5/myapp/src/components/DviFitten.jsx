// import React, { useState } from 'react'

// const DivFitten = () => {
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

// export default DivFitten

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

// import React, { useState } from 'react';

// const DivFitten = () => {
//   const init = {
//     firstname: '',
//     lastname: '',
//     city: '',
//   };

//   const [fromState, setFromState] = useState(init);

//   const handleChange = (e) => {
//     e.preventDefault();
//     // console.log([e.target.id]);
//     setFromState({ ...fromState, [e.target.id]: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(fromState);

//   };

//   const handleClearbtn = (e) => {
//     e.preventDefault();
//     setFromState(init)
//   }
//   return (
//     <form action='' method='' onSubmit={handleSubmit}>
//       <div className='formgroup'>
//         <label htmlFor='firstname'>First Name</label>
//         <input
//           type='text'
//           name='firstname'
//           id='firstname'
//           onChange={handleChange}
//           value={fromState.firstname}
//         />
//         <span>{fromState.firstname}</span>
//       </div>
//       <div className='formgroup'>
//         <label htmlFor='lastname'>Last Name</label>
//         <input
//           type='text'
//           name='lastname'
//           id='lastname'
//           onChange={handleChange}
//           value={fromState.lastname}
//         />
//         <span>{fromState.lastname}</span>
//       </div>
//       <div className='formgroup'>
//         <label htmlFor='city'>City</label>
//         <input type='text' name='city' id='city' onChange={handleChange} value={fromState.city} />
//         <span>{fromState.city}</span>
//       </div>
//       <button type='button' onClick={handleClearbtn}>
//         Clear
//       </button>
//       <button type='submit'>Save</button>
//     </form>
//   );
// };

// export default DivFitten;

import React from 'react';

class DivFitten extends React.Component {
  init = {
    firstname: '',
    lastname: '',
    city: '',
  };

  constructor() {
    super(),
      (this.state = {
        state: this.init,
      });
  }
  render() {
    const handleChange = (e) => {
      e.preventDefault();
            this.setState({
              [e.target.id] : e.target.value
            });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    };
    const handleClear = (e) =>{
      e.preventDefault();
      this.setState(this.init)
    }
    return (
      <form action='' method='' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            name='firstname'
            id='firstname'
            onChange={handleChange}
            value={this.state.firstname}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            name='lastname'
            id='lastname'
            onChange={handleChange}
            value={this.state.lastname}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='city'>City</label>
          <input
            type='text'
            name='city'
            id='city'
            onChange={handleChange}
            value={this.state.city}
          />
        </div>
        <button type='button' onClick={handleClear}>
          Clear
        </button>
        <button type='submit'>Save</button>
      </form>
    );
  }
}


export default DivFitten;