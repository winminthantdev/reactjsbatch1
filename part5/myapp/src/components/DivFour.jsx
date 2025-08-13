// import React, { useEffect, useState } from 'react'

// export default function DivFour({icon}) {
//   const [state, setState] = useState('')
//   useEffect(() =>{
//     setState(icon)
//   },[icon])
//  return(
//   <div>
//    <img src={state} alt="" />
//   </div>
//  )
// }

// import React from 'react'

// export default function DivThree(props) {
//  const {icon} = props;
//   return (
//     <div>
//       <img src={icon} alt='' />
//     </div>
//   )
// }

// import React from 'react'

// export default function DivThree({icon}) {
//   // const { icon } = props
//   return (
//     <div>
//       <img src={icon} alt='' />
//     </div>
//   )
// }

// import React from 'react'

// export default class DivThree extends React.Component{
//   // const { icon } = props

//   constructor(props){
//    super(props)
//    this.state = {
//     icon: this.props.icon
//    }
//   }
//   render() {
//     return (
//       <div>
//         <img src={this.state.icon} alt='' />
//       </div>
//     )
//   }
// }

// import React from 'react'

// export default class DivThree extends React.Component {
 
//  render() {
//    // const { icon } = this.props

//     return (
//       <div>
//         <img src={this.props.icon} alt='' />
//       </div>
//     )
//   }
// }

import React from 'react'

export default class DivFour extends React.Component {
 
  constructor(props){
    super(props)
    this.state ={
      icon: this.props
    }
  }
 render() {
   const { icon } = this.props

    return (
      <div>
        <img src={icon} alt='' />
      </div>
    )
  }
}
