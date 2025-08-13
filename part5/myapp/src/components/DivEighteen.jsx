import React, { useState } from 'react';

const defaultValue = "Choose Your age!";


const DivEighteen = ({defaultValue}) => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [age,setAge] = useState("");
  const [bio,setBio] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [ageErr, setAgeErr] = useState("");
  const [bioErr, setBioErr] = useState("");

  const validate = () =>{
    let isvalid = true;
    let emailError = '', passwordError = '', ageError = '', bioError = '';

    if(email.trim().length === 0){
      emailError = "Email Required";
      isvalid = false;
    }
    if(password.trim().length === 0){
      passwordError = "Password Required";
      isvalid = false;
    }
    if(age.trim().length === 0){
      ageError = "Age Required";
      isvalid = false;
    }
    if(bio.trim().length === 0){
      bioError = "Bio Required";
      isvalid = false;
    }

    setEmailErr(emailError)
    setPasswordErr(passwordError)
    setAgeErr(ageError)
    setBioErr(bioError)

    return isvalid;
  }

  const submitHandler = (e) =>{
    e.preventDefault();

    if(validate()){
      window.alert("Form Submitted");
    }
  }

  const changeHandler = (e) =>{
    const {name, value} = e.target;

if(name === "email") setEmail(value)
  if(name === "password") setPassword(value)
  if(name === "age") setAge(value)
    if(name === "bio") setBio(value)
        }

  return (
    <div>
      <h4>Form Elements</h4>
      <p>{email}</p>
      <p>{password}</p>
      <p>{age}</p>
      <p>{bio}</p>

      <form action='' method='' onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' value={email} onChange={changeHandler} />
          <strong style={{color:"red"}}> {emailErr}</strong>
        </div>
        <div>
          <label htmlFor='password'>Passwod</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={changeHandler}
          />
          <strong style={{ color: 'red' }}> {passwordErr}</strong>
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <select defaultValue={defaultValue} name='age' id='age' value={age} onChange={changeHandler}>
            <option disabled value=''>{defaultValue}</option>
            <option value='1'>21</option>
            <option value='2'>23</option>
            <option value='3'>24</option>
            <option value='4'>25</option>
          </select>
          <strong style={{ color: 'red' }}> {ageErr}</strong>
        </div>
        <div>
          <label htmlFor='bio'>Bio</label>
          <textarea name='bio' id='bio'></textarea>
          <strong style={{ color: 'red' }}> {bioErr}</strong>
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default DivEighteen;


// import React from 'react';

// class DivEighteen extends React.Component {

//   constructor(){
//     super();
//     this.state = {
//       email: '',
//       password: '',
//       age: '',
//       bio: '',

//       emailErr: '',
//       passwordErr: '',
//       ageErr: '',
//       bioErr: '',
//     }
//   }
//    validate = () =>{
//     let isvalid = true;
//     let emailErr = '', passwordErr = '', ageErr = '', bioErr = '';

//     if(this.state.email.trim().length === 0){
//       emailErr = "Email Required";
//       isvalid = false;
//     }
//     if(this.state.password.trim().length === 0){
//       passwordErr = "Password Required";
//       isvalid = false;
//     }
//     if(this.state.age.trim().length === 0){
//       ageErr = "Age Required";
//       isvalid = false;
//     }
//     if(this.state.bio.trim().length === 0){
//       bioErr = "Bio Required";
//       isvalid = false;
//     }

//     // setEmailErr(emailError)
//     // setPasswordErr(passError)
//     // setAgeErr(ageError)
//     // setBioErr(bioError)

//     this.setState({emailErr, passwordErr, ageErr, bioErr})


//     return isvalid;
//   }

//    submitHandler = (e) =>{
//     e.preventDefault();

//     if(this.validate()){
//       window.alert("Form Submitted");
//     }
//   }

//    changeHandler = (e) =>{
//     this.setState({
//       [e.target.name]: e.target.value
//     })

//   }
//   render(){

//     return (
//       <div>
//         <h4>Form Elements</h4>
//         <p>{this.state.email}</p>
//         <p>{this.state.password}</p>
//         <p>{this.state.age}</p>
//         <p>{this.state.bio}</p>
  
//         <form action='' method='' onSubmit={this.submitHandler}>
//           <div>
//             <label htmlFor='email'>Email</label>
//             <input type='text' name='email' id='email' value={this.state.email} onChange={this.changeHandler} />
//             <strong style={{color:"red"}}> {this.state.emailErr}</strong>
//           </div>
//           <div>
//             <label htmlFor='password'>Passwod</label>
//             <input
//               type='password'
//               name='password'
//               id='password'
//               value={this.state.password}
//               onChange={this.changeHandler}
//             />
//             <strong style={{ color: 'red' }}> {this.state.passwordErr}</strong>
//           </div>
//           <div>
//             <label htmlFor='age'>Age</label>
//             <select name='age' id='age' value={this.state.age} onChange={this.changeHandler}>
//               <option disabled>Choose</option>
//               <option value='1'>21</option>
//               <option value='2'>23</option>
//               <option value='3'>24</option>
//               <option value='4'>25</option>
//             </select>
//             <strong style={{ color: 'red' }}> {this.state.ageErr}</strong>
//           </div>
//           <div>
//             <label htmlFor='bio'>Bio</label>
//             <textarea name='bio' id='bio' onChange={this.changeHandler}></textarea>
//             <strong style={{ color: 'red' }}> {this.state.bioErr}</strong>
//           </div>
//           <button type='submit'>Save</button>
//         </form>
//       </div>
//     );
//   };
  
// }
// export default DivEighteen;


// 3VD