// import React, { Fragment, useState } from 'react';

// const GridFive = () => {
//   const [ison, setIson] = useState(false);

//   const Onmsg = () => <p>Lighting is ON.</p>;
//   const Offmsg = () => <p>Lighting is OFF.</p>;

//   const clickHandler = () => {
//     setIson((x) => !x);
//   };

//   // method 1
//   // const IsOnOff = ({ current }) => {
//   //   if (current) {
//   //     return <Onmsg />;
//   //   } else {
//   //     return <Offmsg />;
//   //   }
//   // };

//   // let message;
//   // if(ison){
//   //  message = <Onmsg />
//   // }else{
//   //  message = <Offmsg />;
//   // }

//   const message = () =>{
//    if(ison){
//     return <Onmsg />
//    } else{
//     return <Offmsg />;
//    }
//   }
//   return (
//     <Fragment>
//       <h3>Lighting</h3>
//       {/* method 1 by component */}
//       {/* <IsOnOff current={ison} /> */}

//       {/* method 2 by variables */}
//       {/* {message} */}

//     {/* method 3 by function */}
//     {/* {message()} */}

//     {/* method 4 by ternary operator */}
//     {ison ? <Onmsg /> : <Offmsg />}
//       <button type='button' onClick={clickHandler}>
//         Switch
//       </button>
//     </Fragment>
//   );
// };

// export default GridFive;




import React, { Fragment } from 'react';

class GridFive extends React.Component {
  constructor(props) {
    super(props), (this.state = { ison: false });
  }
  Onmsg = () => <p>Lighting is ON.</p>;
  Offmsg = () => <p>Lighting is OFF.</p>;

  clickHandler = () => {
    this.setState((preState) => ({
     ison:!preState.ison // Toggle the ison state
    }));
  };

  // method 1
  //  IsOnOff = ({ current }) => {
  //   return current ? <this.Onmsg /> : <this.Offmsg />
  // };



  // message = () => {
  //   if (this.state.ison) {
  //     return <this.Onmsg />;
  //   } else {
  //     return <this.Offmsg />;
  //   }
  // };
  render() {
   const {ison} = this.state;
     // let message;
     // if (ison) {
     //   message = <this.Onmsg />;
     // } else {
     //   message = <this.Offmsg />;
     // }
    return (
      <Fragment>
        <h3>Lighting</h3>
        {/* method 1 by component */}
        {/* <this.IsOnOff current={ison} /> */}

        {/* method 2 by variables */}
        {/* {message} */}

        {/* method 3 by function */}
        {/* {this.message()} */}

        {/* method 4 by ternary operator */}
        {this.state.ison ? <this.Onmsg /> : <this.Offmsg />}
        <button type='button' onClick={this.clickHandler}>
          Switch
        </button>
      </Fragment>
    );
  }
}
// 10CL

export default GridFive;
