// import React from 'react';

// const GridTwo = (props) =>{
//  const status = props.status;
//  if(status){
//   return <UserGreeting />
//  }
//  return <GuestGreeting />
// };

// const UserGreeting = () =>{
// return <h1>Welcome Sir</h1>
// }

// const GuestGreeting = () => {
//   return <h1>Please Sign up</h1>;
// };

// export default GridTwo;

import React from 'react';

class GridTwo extends React.Component {
  // constructor(props) {
  //   super(props),
  //     (this.state = {
  //       status: props.status,
  //     });
  // }
  render() {
   const status = this.props.status;
    // if (this.state.status) {
    //   return <UserGreeting />;
    // }
        if (status) {
          return <UserGreeting />;
        }
    return <GuestGreeting />;
  }
}

class UserGreeting extends React.Component {
  render() {
    return <h1>Welcome Sir</h1>;
  }
}

class GuestGreeting extends React.Component {
  render() {
    return <h1>Please Sign up</h1>;
  }
}

export default GridTwo;
