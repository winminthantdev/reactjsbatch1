// // import React, { useState, useCallback } from 'react';

// // const GridThree = () => {
// //   const [loginState, setLoginState] = useState();

// //   const loginHandler = useCallback(() => { setLoginState((loginState) => true);}, [loginState]); //tell react to memorize
// //   const logoutHandler = useCallback(() => {
// //     setLoginState((loginState) => false);
// //   }, [loginState]); //tell react to memorize

// //   let button;

// //   if (loginState) {
// //     button = <LogoutButton handler={logoutHandler} />;
// //   } else {
// //     button = <LoginButton handler={loginHandler} />;
// //   }
// //   return (
// //     <div>
// //       <Greeting status={loginState} />
// //       {button}
// //     </div>
// //   );
// // };

// // function UserGreeting() {
// //   return <h1>Welcome Back Sir,You are already Login </h1>;
// // }

// // function GuestGreeting() {
// //   return <h1>Please Login</h1>;
// // }

// // function Greeting(props) {
// //   const status = props.status;

// //   if (status) {
// //     return <UserGreeting />;
// //   } else {
// //     return <GuestGreeting />;
// //   }
// // }

// // function LoginButton(props) {
// //   return (
// //     <button type='button' onClick={props.handler}>
// //       Login
// //     </button>
// //   );
// // }

// // function LogoutButton(props) {
// //   return (
// //     <button type='button' onClick={props.handler}>
// //       Logout
// //     </button>
// //   );
// // }
// // export default GridThree;

// // import React, { useCallback, useEffect, useState } from 'react';

// // // <--------------- main component ------------------------------>
// // const GridThree = () => {
// //   const [loginState, setLoginState] = useState();

// //   const logoutHandler = useCallback(() =>{setLoginState((loginState) => false)},[loginState]);
// //   const loginHandler = useCallback(() => {
// //     setLoginState((loginState) => true);
// //   }, [loginState]);

// //   return (
// //     <div>
// //       <Greeting status={loginState} />
// //       {button}
// //     </div>
// //   );
// // };

// // // ------------------display content ---------------------
// // function Greeting(props) {
// //   const status = props.status;

// //   if (status) {
// //     return <UserGreeting />;
// //   } else {
// //     return <GuestGreeting />;
// //   }
// // };

// // function UserGreeting() {
// //   return <h1>Welcome back sir! You are already login.</h1>;
// // }

// // function GuestGreeting() {
// //   return <h1>Please Login</h1>;
// // }

// // // -------------------------button state ----------------------

// // function LoginButton() {
// //   return <button type='button' onClick={props.handler}>Login</button>
// // };

// // function LogoutButton(){
// //   return <button type="button" onClick={props.handler}>Logout</button>
// // }

// // let button;

// // if(loginState){
// //   return <LogoutButton handler={logoutHandler} />
// // } else{
// //   return <LoginButton handler={loginHandler} />
// // }

// // export default GridThree;

// // import React from 'react';

// // class GridThree extends React.Component {
// //   constructor(props) {
// //     super(props),
// //     this.state = {loginState: false};
// //     this.loginHandler = this.handlerloginclick.bind(this);
// //     this.logoutHandler = this.handlerlogoutclick.bind(this);
// //   }

// //   handlerloginclick() {
// //     this.setState({
// //       loginState: true,
// //     });
// //   }

// //   handlerlogoutclick() {
// //     this.setState({
// //       loginState: false,
// //     });
// //   }

// //   render() {
// //     let button;

// //     if (this.state.loginState) {
// //       button = <LogoutButton handler={this.logoutHandler} />;
// //     } else {
// //       button = <LoginButton handler={this.loginHandler} />;
// //     }
// //     return (
// //       <div>
// //         <Greeting status={this.state.loginState} />
// //         {button}
// //       </div>
// //     );
// //   }
// // }

// // function UserGreeting() {
// //   return <h1>Welcome Back Sir,You are already Login </h1>;
// // }

// // function GuestGreeting() {
// //   return <h1>Please Login</h1>;
// // }

// // function Greeting(props) {
// //   const status = props.status;

// //   if (status) {
// //     return <UserGreeting />;
// //   } else {
// //     return <GuestGreeting />;
// //   }
// // }

// // function LoginButton(props) {
// //   return (
// //     <button type='button' onClick={props.handler}>
// //       Login
// //     </button>
// //   );
// // }

// // function LogoutButton(props) {
// //   return (
// //     <button type='button' onClick={props.handler}>
// //       Logout
// //     </button>
// //   );
// // }
// // export default GridThree;

// // import React from 'react';

// // class GridThree extends React.Component {
// //   constructor(props) {
// //     super(props), (this.state = { loginState: false });
// //     this.loginHandler = this.handleLoginClick.bind(this);
// //     this.logoutHandler = this.handleLogoutClick.bind(this);
// //   }
// //   handleLoginClick = () => {
// //     this.setState({ loginState: true });
// //   };

// //   handleLogoutClick = () => {
// //     this.setState({ loginState: false });
// //   };
// //   render() {
// //     let button;
// //     if (this.state.loginState) {
// //       button = <LogoutButton handler={this.logoutHandler} />;
// //     } else {
// //       button = <LoginButton handler={this.loginHandler} />;
// //     }
// //     return (
// //       <div>
// //         <Greeting status={this.state.loginState} />
// //         {button}
// //       </div>
// //     );
// //   }
// // }

// // function UserGreeting() {
// //   return <h1>Welcome Back Sir,You are already Login </h1>;
// // }

// // function GuestGreeting() {
// //   return <h1>Hello, Please Login</h1>;
// // }

// // function Greeting(props) {
// //   const status = props.status;

// //   if (status) {
// //     return <UserGreeting />;
// //   } else {
// //     return <GuestGreeting />;
// //   }
// // }

// // function LoginButton(props) {
// //   return (
// //     <button type='button' onClick={props.handler}>
// //       Login
// //     </button>
// //   );
// // }

// // function LogoutButton(props) {
// //   return (
// //     <button type='button' onClick={props.handler}>
// //       Logout
// //     </button>
// //   );
// // }
// // export default GridThree;

// // import React, { useCallback, useState } from 'react';

// // const GridThree = () => {
// //   const [loginState, setLoginState] = useState(false);

// //   const loginHandler = useCallback(() => {
// //     setLoginState((loginState) => true);
// //   }, [loginState]);

// //   const logoutHandler = useCallback(() => {
// //     setLoginState((loginState) => false);
// //   }, [loginState]);

// //   let button;
// //   if (loginState) {
// //     button = <LogoutButton handler={logoutHandler} />;
// //   } else {
// //     button = <LoginButton handler={loginHandler} />;
// //   }
// //   return (
// //     <div>
// //       <Greeting status={loginState} />
// //       {button}
// //     </div>
// //   );
// // };

// // function UserGreeting() {
// //   return <h1>Welcome Back Sir,You are already Login </h1>;
// // }

// // function GuestGreeting() {
// //   return <h1>Hello, Please Login</h1>;
// // }

// // function Greeting(props) {
// //   const status = props.status;

// //   if (status) {
// //     return <UserGreeting />;
// //   } else {
// //     return <GuestGreeting />;
// //   }
// // }

// // function LoginButton(props) {
// //   return (
// //     <button type='button' onClick={props.handler}>
// //       Login
// //     </button>
// //   );
// // }

// // function LogoutButton(props) {
// //   return (
// //     <button type='button' onClick={props.handler}>
// //       Logout
// //     </button>
// //   );
// // }
// // export default GridThree;

// // import React, { useCallback, useState } from 'react';

// // const GridThree = () => {
// //   const [loginState, setLoginState] = useState(false);

// //   const loginHandler = useCallback(() => {
// //     setLoginState((loginState) => true);
// //   }, [loginState]);

// //   const logoutHandler = useCallback(() => {
// //     setLoginState((loginState) => false);
// //   }, [loginState]);

// //   let button;
// //   if (!loginState) {
// //     button = <LoginButton handler={loginHandler} />;
// //   } else {
// //     button = <LogoutButton handler={logoutHandler} />;
// //   }

// //   return (
// //     <div>
// //       <Greeting status={loginState} />
// //       {button}
// //     </div>
// //   );
// // };

// // function LoginButton(props) {
// //   return (
// //     <button type='button' onClick={props.handler}>
// //       login
// //     </button>
// //   );
// // }

// // function LogoutButton(props) {
// //   return (
// //     <button type='button' onClick={props.handler}>
// //       Logout
// //     </button>
// //   );
// // }

// // function Greeting(props) {
// //   const status = props.status;
// //   if (status) {
// //     return <UserGreeting />;
// //   } else {
// //     return <GuestGreeting />;
// //   }
// // }

// // function UserGreeting() {
// //   return <h1>Hello Welcome Back Sir, you are already login.</h1>;
// // }

// // function GuestGreeting() {
// //   return <h1>Please Login to view</h1>;
// // }

// // export default GridThree;

// import React from 'react';

// class GridThree extends React.Component {
//   constructor(props) {
//     super(props), (this.state = { loginState: false });
//     this.loginHandler = this.loginClick.bind(this);
//     this.logoutHandler = this.logoutClick.bind(this);
//   }
//   loginClick() {
//     return this.setState({loginState : true})
//   }

//   logoutClick(){
//     return this.setState({loginState : false})
//   }

//   render() {

//     let button;
//     if (this.state.loginState) {
//       button = <LogoutButton handler={this.logoutHandler} />;
//     } else {
//       button = <LoginButton handler={this.loginHandler} />;
//     }
//     return (
//       <div>
//         <Greeting status={this.state.loginState} />
//         {button}
//       </div>
//     );
//   }
// }

// function LoginButton(props){
//   return <button type="button" onClick={props.handler}>Login</button>
// }

// function LogoutButton(props){
//   return <button type="button" onClick={props.handler}>logout</button>
// }

// function Greeting(props) {
//   const status = props.status;
//   if (status) {
//     return <UserGreeting />;
//   } else {
//     return <GuestGreeting />;
//   }
// }

// function UserGreeting() {
//   return <h1>Hello, Welcome back sir, you are already login!</h1>;
// }

// function GuestGreeting() {
//   return <h1>Hello Sir, Please Login!</h1>;
// }

// export default GridThree;

// import React, { useState } from 'react';
// const GridThree = () => {
//   const [persons, setPersons] = useState([
//     { name: 'mi mi', msg: 'btw how old are you?' },
//     { name: 'ni ni', msg: 'btw how do you do?' },
//     { name: 'yi yi', msg: 'btw how about you?' },
//   ]);

//   const clickHandler = () => {
//     setPersons([
//       { name: 'ko ko', msg: 'btw how old are you?' },
//       { name: 'nyo nyo', msg: 'btw how do you do?' },
//       { name: 'mo mo', msg: 'btw how about you?' },
//     ]);
//   };
//   return (
//     <div>
//       <h4>
//         Thanks for helping us {persons[0].name}. {persons[0].msg}
//       </h4>
//       <h4>
//         Thanks for helping us {persons[1].name}. {persons[1].msg}
//       </h4>
//       <h4>
//         Thanks for helping us {persons[2].name}. {persons[2].msg}
//       </h4>
//       <button type='button' onClick={clickHandler}>
//         Click Me
//       </button>
//     </div>
//   );
// };
// export default GridThree;

import React, { useState } from 'react';
class GridThree extends React.Component {
  constructor() {
    super(),
      (this.state = {
        persons: [
          { name: 'mi mi', msg: 'btw how old are you?' },
          { name: 'ni ni', msg: 'btw how do you do?' },
          { name: 'yi yi', msg: 'btw how about you?' },
        ],
      });
  }
  clickHandler = () => {
    this.setState({
      persons: [
        { name: 'ko ko', msg: 'btw how old are you?' },
        { name: 'nyo nyo', msg: 'btw how do you do?' },
        { name: 'mo mo', msg: 'btw how about you?' },
      ],
    });
  };

  render() {
    return (
      <div>
        <h4>
          Thanks for helping us {this.state.persons[0].name}. {this.state.persons[0].msg}
        </h4>
        <h4>
          Thanks for helping us {this.state.persons[1].name}. {this.state.persons[1].msg}
        </h4>
        <h4>
          Thanks for helping us {this.state.persons[2].name}. {this.state.persons[2].msg}
        </h4>
        <button type='button' onClick={this.clickHandler}>
          Click Me
        </button>
      </div>
    );
  }
}
export default GridThree;
