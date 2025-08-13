// import React, { useState } from 'react';

// const Gridone = () => {
//   const students = {
//     data: [
//       { id: 1, name: 'aung aung', city: 'yangon' },
//       { id: 2, name: 'su su', city: 'mawlamyang' },
//       { id: 3, name: 'kyaw kyaw ', city: 'bago' },
//       { id: 4, name: 'hnin hnin ', city: 'yangon' },
//       { id: 5, name: 'thura ', city: 'mandalay' }
//     ],
//   };

//   const [dataState, setDataState]  = useState(students);
//   return (
//     <div>
//       <Article />
//       {
//        dataState.data.map((student,idx) => <Post key={idx} sentdata = {student}/>)
//       }
//     </div>
//   );
// };

// const Article = () => {
//   return (
//     <div>
//       <h1>This is article functional component</h1>
//       <p>Hello World</p>
//     </div>
//   );
// };

// class Post extends React.Component {
//   render() {
//     return (
//       <div>
//         <li>{this.props.sentdata.id} . {this.props.sentdata.name} , {this.props.sentdata.city} </li>
//       </div>
//     );
//   }
// }

// export default Gridone;

import React from 'react';

class Gridone extends React.Component {
  constructor() {
    super(),
      (this.students = {
        data: [
          { id: 1, name: 'aung aung', city: 'yangon' },
          { id: 2, name: 'su su', city: 'mawlamyang' },
          { id: 3, name: 'kyaw kyaw ', city: 'bago' },
          { id: 4, name: 'hnin hnin ', city: 'yangon' },
          { id: 5, name: 'thura ', city: 'mandalay' },
        ],
      });
  }

  render() {
    return (
      <div>
        <Article />
        {this.students.data.map((student, idx) => (
          <Post key={idx.toString()} sentdata={student} />
        ))}
      </div>
    );
  }
}

const Article = () => {
  return (
    <div>
      <h1>This is article functional component</h1>
      <p>Hello World</p>
    </div>
  );
};

class Post extends React.Component {
  render() {
    return (
      <div>
        <li>
          {this.props.sentdata.id} . {this.props.sentdata.name} , {this.props.sentdata.city}{' '}
        </li>
      </div>
    );
  }
}

export default Gridone;
