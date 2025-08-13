// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div>
//       <h1>Home page</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil repellat voluptas
//         distinctio at perspiciatis perferendis veritatis iste suscipit labore ab, nemo maxime
//         doloremque quaerat obcaecati. Eum pariatur quae ipsum.
//       </p>

//       <p>
//         Lorem ipsum dolor si linked to <Link to={'/product/1002'}>Joey</Link> amet consectetur
//         adipisicing elit. Accusantium nihil repellat voluptas
//         <Link to={'/product/1003'}>Deedo</Link>
//         distinctio at perspiciatis perferendis veritatis iste suscipit labore ab, nemo maxime
//         doloremque quaerat obcaecati. Eum pariatur quae ipsum.
//       </p>
//     </div>
//   );
// }

// export default Home;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render(){

    return (
      <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil repellat voluptas
        distinctio at perspiciatis perferendis veritatis iste suscipit labore ab, nemo maxime
        doloremque quaerat obcaecati. Eum pariatur quae ipsum.
      </p>

      <p>
        Lorem ipsum dolor si linked to <Link to={'/product/1002'}>Joey</Link> amet consectetur
        adipisicing elit. Accusantium nihil repellat voluptas
        <Link to={'/product/1003'}>Deedo</Link>
        distinctio at perspiciatis perferendis veritatis iste suscipit labore ab, nemo maxime
        doloremque quaerat obcaecati. Eum pariatur quae ipsum.
      </p>
    </div>
  );
}
}

export default Home;
