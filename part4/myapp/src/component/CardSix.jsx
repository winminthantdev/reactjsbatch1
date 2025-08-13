// import React from 'react'
// import './CardSix.css'

// export default function Cardsix() {
//   const internalstyle = {
//     backgroundColor: 'blue',
//     color: '#fff',
//     padding: '8px 16px',
//     borderRadius: '5px',
//   }
//   const objectstyle = {
//     skb: { backgroundColor: 'skyblue' },
//     vlt: { backgroundColor: 'violet' },
//     org: { backgroundColor: 'orange' },
//   }
//   const getorgcolor = 'org'
//   return (
//     <div>
//       <h4 style={{ color: 'green' }}>Hello world, Welcome to our app</h4>
//       <button style={{ color: 'red', fontStyle: 'italic' }}>Click me</button>
//       <h4 style={internalstyle}>Hello earth, Welcome to our calss</h4>
//       <button style={internalstyle}>Click me</button>
//       <h3>Hello Gays, Welcome to our app</h3>
//       <h5>Hello Gays, Welcome to our app</h5>
//       <h5>Hello Girls, Welcome to our app</h5>
//       <p style={objectstyle.skb}>Thank you</p>
//       <p style={objectstyle['vlt']}>Regards</p>
//       <p style={objectstyle[getorgcolor]}>Bye Bye</p>
//       <button className='myexstyle'>Click me</button>
//     </div>
//   )
// }

import React from 'react'
import './CardSix.css'
export default class CardSix extends React.Component {
 render() {
 const internalstyle = {
  backgroundColor: 'blue',
  color: '#fff',
  padding: '8px 16px',
  borderRadius: '5px',
 }
    const objectstyle = {
      skb: { backgroundColor: 'skyblue' },
      vlt: { backgroundColor: 'violet' },
      org: { backgroundColor: 'orange' },
    }
    const getorgcolor = 'org'
    return (
     <div>
        <h4 style={{ color: 'green' }}>Hello world, Welcome to our app</h4>
        <button style={{ color: 'red', fontStyle: 'italic' }}>Click me</button>
        <h4 style={internalstyle}>Hello earth, Welcome to our calss</h4>
        <button style={internalstyle}>Click me</button>
        <h3>Hello Gays, Welcome to our app</h3>
        <h5>Hello Gays, Welcome to our app</h5>
        <h5>Hello Girls, Welcome to our app</h5>
        <p style={objectstyle.skb}>Thank you</p>
        <p style={objectstyle['vlt']}>Regards</p>
        <p style={objectstyle[getorgcolor]}>Bye Bye</p>
        <button className='myexstyle'>Click me</button>
      </div>
    )
  }
}
