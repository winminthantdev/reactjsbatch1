// import React, { useState } from 'react'

// const shortlabels =  ['Name', 'Gender', 'City']
// const longlabels = ['Full name', 'Choose Gender', 'Enter your hometown']

// const DivNine = () => {
//  const [lableState, setLabelState] = useState(shortlabels)

//  const handlechangelabel = () =>{
//   setLabelState(lableState === shortlabels ? longlabels : shortlabels)
//   // console.log("i am working");

//  }
//  const display =lableState.map((val,idx)=>(
//   <div className='form-group' key={idx}>
//     <label htmlFor={`info${idx}`}>{val}</label>
//     <br />
//     <input type='text' name={`info${idx}`} id={`info${idx}`} className='form-control' />
//   </div>
//  ))
//  return (
//   <section>
//    <h2>Register Form</h2>
//    <form action="" method=''>
//   {display}
//    </form>
//    <br />
//    <button onClick={handlechangelabel}>Change label</button>
//   </section>
//  )
// }

// export default DivNine;

import React from 'react'

const shortlabels = ['Name', 'Gender', 'City']
const longlabels = ['Full name', 'Choose Gender', 'Enter your hometown']

class DivNine extends React.Component {
  constructor() {
    super()
    this.state = {
      labelState: shortlabels,
    }
  }
  handlechangelabel = () => {
    this.setState({
      labelState:
        this.state.labelState === shortlabels ? longlabels : shortlabels,
    })
    // console.log("i am working");
  }
  render() {
    const display = this.state.labelState.map((val, idx) => (
      <div className='form-group' key={idx}>
        <label htmlFor={`info${idx}`}>{val}</label>
        <br />
        <input
          type='text'
          name={`info${idx}`}
          id={`info${idx}`}
          className='form-control'
        />
      </div>
    ))
    return (
      <section>
        <h2>Register Form</h2>
        <form action='' method=''>
          {display}
        </form>
        <br />
        <button onClick={this.handlechangelabel}>Change label</button>
      </section>
    )
  }
}

export default DivNine
