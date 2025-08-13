// import React,{Fragment,useState,useEffect} from 'react';

// const DivTwelve=()=>{

//     const getinitidx=()=>{
//         const savedidx=localStorage.getItem('mynewdb');
//         return savedidx ? parseInt(savedidx) : 0;
//     }
//     const[idxState,setIdxState]= useState(getinitidx); //will be 0 or saved idx

//     useEffect(()=>{
//         localStorage.setItem('mynewdb',idxState);
//     },[idxState]);

//     const incclickHandler=()=>{
//         setIdxState(idxState=>idxState +1);
//     }
//     const decclickHandler=()=>{
//         setIdxState(idxState=>idxState -1);
//     }
//     const resetclickHandler=()=>{
//         setIdxState(0);
//         localStorage.clear();
//     }
//     return(
//         <Fragment>
//             <p>{idxState}</p>
//             <button type="button" onClick={incclickHandler}>Click Increment</button>
//             <button type="button" onClick={decclickHandler}>Click Decrement</button>
//             <button type="button" onClick={resetclickHandler}>Reset Me</button>
//         </Fragment>
//     )
// }
// export default DivTwelve;

// import React, { Fragment } from 'react'

// class DivTwelve extends React.Component {
//   constructor() {
//     super()

//     const saveidx = localStorage.getItem('mynewdb')

//     this.state = {
//       idx: saveidx ? parseInt(saveidx) : 0,
//     }
//   }

//   // componentDidMount(){
//   //     console.log("i am did mount, idx =" + this.state.idx);
//   // }

//   componentDidUpdate() {
//     //console.log("i am did update idx=" + this.state.idx);
//     localStorage.setItem('mynewdb', this.state.idx)
//   }

//   render() {
//     const incclickHandler = () => {
//       this.setState({
//         idx: this.state.idx + 1,
//       })
//     }

//     const decclickHandler = () => {
//       this.setState({
//         idx: this.state.idx - 1,
//       })
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
//         <button type='button' onClick={incclickHandler}>
//           Click Increment
//         </button>
//         <button type='button' onClick={decclickHandler}>
//           Click Decrement
//         </button>
//         <button type='button' onClick={resetclickHandler}>
//           Reset Me
//         </button>
//       </Fragment>
//     )
//   }
// }

// export default DivTwelve

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

// const DivTwelve = () => {

//   const innitIdx = () => {
//     const savedidx = localStorage.getItem('mynewdb')
//     return savedidx ? parseInt(savedidx) : 0
//   }
//   const [idxState, setIdxState] = useState(innitIdx)

//   useEffect(() => {
// localStorage.setItem('mynewdb', idxState)
//   }, [idxState])

//   const handleClickIncrease = () => {
//     setIdxState((idxState) => idxState + 1)
//   }
//   const handleClickDecrease = () => {
//     setIdxState((idxState) => idxState - 1)
//   }
//   const handleClickReset = () => {
//     setIdxState(0)
//     localStorage.clear()
//   }
//   return (
//     <Fragment>
//       <p> {idxState} </p>
//       <button type='button' onClick={handleClickIncrease}>
//         Increase Me
//       </button>
//       <button type='button' onClick={handleClickDecrease}>
//         Decrease Me
//       </button>
//       <button type='button' onClick={handleClickReset}>
//         Reset Me
//       </button>
//     </Fragment>
//   )
// }

// export default DivTwelve

import React, { Fragment } from 'react'

class DivTwelve extends React.Component {
  constructor() {
    super()
    const saveidx = localStorage.getItem('mynewdb')
    this.state = {
      idx: saveidx ?  parseInt(saveidx) : 0,
    }
  }

  // componentDidMount() {
  //   console.log('I am working')
  //   const getlocaldb = localStorage.getItem('mydb')
  //   if (getlocaldb !== null) {
  //     this.setState({
  //       idx: +getlocaldb,
  //     })
  //   }
  // }
  componentDidUpdate() {
    localStorage.setItem('mynewdb', this.state.idx)
  }
  render() {
    const handleClickIncrease = () => {
      this.setState({
        idx: this.state.idx + 1,
      })
    }
    const handleClickDecrease = () => {
      this.setState({
        idx: this.state.idx - 1,
      })
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
        <button type='button' onClick={handleClickIncrease}>
          Increase Me
        </button>

        <button type='button' onClick={handleClickDecrease}>
          Decrease Me
        </button>

        <button type='button' onClick={handleClickReset}>
          Reset Me
        </button>
      </Fragment>
    )
  }
}

export default DivTwelve
