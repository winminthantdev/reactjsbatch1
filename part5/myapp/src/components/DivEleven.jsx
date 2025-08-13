// import React,{Fragment,useState,useEffect} from 'react';

// const DivEleven=()=>{
//     const[idxState,setIdxState]= useState(0);

//     useEffect(()=>{
//         const getlocaldb=localStorage.getItem("mydb");

//         if(getlocaldb !== null){
//             setIdxState(parseInt(getlocaldb));
//         }
//     },[]);

//     const clickHandler=()=>{
//         setIdxState(idxState=>idxState+1)
//     }
//     const saveclickHandler=()=>{
//         localStorage.setItem('mydb',idxState);
//     }
//     const resetclickHandler=()=>{
//         setIdxState(0);
//         localStorage.clear();
//     }
//     return(
//         <Fragment>
//             <p>{idxState}</p>
//             <button type="button" onClick={clickHandler}>Click Me</button>
//             <button type="button" onClick={saveclickHandler}>Save Me</button>
//             <button type="button" onClick={resetclickHandler}>Reset Me</button>
//         </Fragment>
//     )
// }
// export default DivEleven;

// import React, { Fragment } from 'react'

// class DivEleven extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       idx: 0,
//     }
//   }

//   componentDidMount() {
//     console.log('i am did mount')

//     const getlocaldb = localStorage.getItem('mydb')

//     if (getlocaldb !== null) {
//       this.setState({
//         idx: +getlocaldb,
//       })
//     }
//   }

//   render() {
//     const clickHandler = () => {
//       this.setState({
//         idx: this.state.idx + 1,
//       })
//     }

//     const saveclickHandler = () => {
//       localStorage.setItem('mydb', this.state.idx)
//     }

//     const resetclickHandler = () => {
//       this.setState({
//         idx: 0,
//       })
//       localStorage.clear()
//     }
//     return (
//       <Fragment>
//         <p>{this.state.idx}</p>
//         <button type='button' onClick={clickHandler}>
//           Click Me
//         </button>
//         <button type='button' onClick={saveclickHandler}>
//           Save Me
//         </button>
//         <button type='button' onClick={resetclickHandler}>
//           Reset Me
//         </button>
//       </Fragment>
//     )
//   }
// }
// export default DivEleven

// import React, { Fragment, useEffect, useState } from 'react'

// const DivEleven = () =>{
//   const [idxState, setIndState] = useState(0);

//   useEffect(() =>{
//     const getlocaldb = localStorage.getItem("mydb")
//     if(getlocaldb !== null){
//       setIndState(parseInt(getlocaldb))
//     }
//   },[])

//   const handleClick = () =>{
//     setIndState(idxState => idxState + 1)
//   }
//   const handleClickSave = () => {
//     localStorage.setItem("mydb", idxState)
//   }
//   const handleClickReset = () => {
//     setIndState(0)
//     localStorage.clear();
//   }
//   return(
//     <Fragment>
//       <p> {idxState} </p>
//       <button type="button" onClick={handleClick}>Click Me</button>
//       <button type="button" onClick={handleClickSave}>Save Me</button>
//       <button type="button" onClick={handleClickReset}>Reset Me</button>
//     </Fragment>
//   )
// }

// export default DivEleven;

import React, { Fragment } from 'react'

class DivEleven extends React.Component {
  constructor() {
    super()
    this.state = {
      idx: 0,
    }
  }

  componentDidMount(){
    console.log("I am working");
    const getlocaldb = localStorage.getItem("mydb");
    if(getlocaldb !== null){
      this.setState({
        idx: +getlocaldb
      })
    }
    
  }
  render() {
    const handleClick = () => {
      this.setState({
        idx: this.state.idx + 1,
      })
    }
    const handleClickSave = () => {
      localStorage.setItem('mydb', this.state.idx)
    }
    const handleClickReset = () => {
      this.setState({
        idx: 0,
      })
      localStorage.clear()
    }
    return (
      <Fragment>
        <p> {this.state.idx} </p>
        <button type='button' onClick={handleClick}>
          Click Me
        </button>
        <button type='button' onClick={handleClickSave}>
          Save Me
        </button>
        <button type='button' onClick={handleClickReset}>
          Reset Me
        </button>
      </Fragment>
    )
  }
}

export default DivEleven
