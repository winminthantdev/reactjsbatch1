// import React from 'react'

// export default function DivFive(){
//  return(
//   <div>
//    <Article />
//    <Post />
//   </div>
//  )
// }

// const Article = () =>{
//  return (
//   <div>
//    <h3>This is Article functional component</h3>
//    <p>Hello friends,are you ready to learn reactjs?</p>
//   </div>
//  )
// }

// const Post = () => {
//  return (
//    <div>
//      <h3>This is Post functional component</h3>
//      <p>Hello friends,are you ready to learn reactjs?</p>
//    </div>
//  )
// }

import React from 'react'

export default class DivFive extends React.Component {
  render() {
    return (
     <div>
      <Article />
      <Post />
     </div>
    )
  }
}

const Article = () => {
  return (
    <div>
      <h3>This is Article functional component</h3>
      <p>Hello friends,are you ready to learn reactjs?</p>
    </div>
  )
}

const Post = () => {
  return (
    <div>
      <h3>This is Post functional component</h3>
      <p>Hello friends,are you ready to learn reactjs?</p>
    </div>
  )
}
