// import React, { Fragment, useEffect, useState } from 'react';

// const GridTen = (props) => {
//   const [contact, setContact] = useState(props.data || []);

//   useEffect(() => {
//     setContact(props.data || []);
//   }, [props.data]);

//   function addnewperson(newcontact) {
//     setContact([...contact, newcontact]);
//   }
//   return (
//     <Fragment>
//       <AddForm addnewfun={addnewperson} />
//       <ContactList data={contact} />
//     </Fragment>
//   );
// };

// function AddForm(props) {
//   const [person, setPerson] = useState('');

//   function changeHandler(e) {
//     setPerson(e.target.value);
//   }
//   function submitHandler(e) {
//     e.preventDefault();

//     if (person.trim()) {
//       props.addnewfun(person);
//       setPerson(''); // clear old history
//     }
//   }
//   return (
//     <form action='' method='' onSubmit={submitHandler}>
//       <input type='text' placeholder='Add New Contact' value={person} onChange={changeHandler} />
//       <button type='submit'>Add</button>
//     </form>
//   );
// }

// function ContactList(props) {
//   const peoples = props.data;
//   const listitems = peoples.map((people, idx) => (
//     <li key={idx}>
//       {++idx} {people}
//     </li>
//   ));
//   return <ul>{listitems}</ul>;
// }
// export default GridTen;

// 24GT

// import React, { Fragment, Component } from 'react';

// class GridTen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contact: props.data || [],
//       person: '',
//     };
//     this.addnewperson = this.addnewperson.bind(this);
//     this.changeHandler = this.changeHandler.bind(this);
//     this.submitHandler = this.submitHandler.bind(this);
//   }

//   addnewperson(newcontact) {
//     this.setState((prevState) => ({
//       contact: [...prevState.contact, newcontact],
//     }));
//   }

//   changeHandler(e) {
//     this.setState({
//       person: e.target.value,
//     });
//   }

//   submitHandler(e) {
//     e.preventDefault();

//     const { person } = this.state;

//     if (person.trim()) {
//       this.addnewperson(person);
//       this.setState({ person: '' });
//     }
//   }
//   render() {
//     const { contact, person } = this.state;
//     return (
//       <Fragment>
//         <form action='' method='' onSubmit={submitHandler}>
//           <input
//             type='text'
//             placeholder='Add New Contact'
//             value={person}
//             onChange={changeHandler}
//           />
//           <button type='submit'>Add</button>
//         </form>

//         <ul>
//           {contact.map(
//             (person, idx)(
//               <li key={idx}>
//                 {++idx} {person}
//               </li>
//             )
//           )}
//           ;
//         </ul>
//       </Fragment>
//     );
//   }
// }

// export default GridTen;




import React, { Fragment, Component } from 'react';

class GridTen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.data || [],
      person: '',
    };
    this.addnewperson = this.addnewperson.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  addnewperson(newcontact) {
    this.setState((prevState) => ({
      contact: [...prevState.contact, newcontact],
    }));
  }

  changeHandler(e) {
    this.setState({
      person: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();

    const { person } = this.state;

    if (person.trim()) {
      this.addnewperson(person);
      this.setState({ person: '' });
    }
  }
  render() {
    const { contact, person } = this.state;
    return (
      <Fragment>

        <AddForm  person={person} changeHandler = {this.changeHandler } submitHandler={this.submitHandler} />
        <ContactList peoples={contact} />
</Fragment>
    );
  }
}

class AddForm extends Component{
  render(){
    return(
      <form onSubmit={this.props.submitHandler}>
        <input type="text" placeholder='Add new Contact' value={this.props.person} onChange={this.props.changeHandler}/>
        <button type="submit">Add</button>

      </form>
    )
  }
}

class ContactList extends Component{
  render(){
    const listitems = this.props.peoples.map((people,idx) => <li key={idx}>{++idx} {people}</li>
  )
  return <ul>{listitems}</ul>
  }
}

export default GridTen;
