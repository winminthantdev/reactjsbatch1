// import React from "react";

// function PageNoteFound(){
//  return (
//    <div>
//      <h2>Page Not Found : 404</h2>
    
//    </div>
//  );
// }

// export default PageNoteFound;


import React from 'react';

function PageNoteFound({title}) {
  return (
    <div>
      <h2>{title}Page Not Found</h2>
    </div>
  );
}

export default PageNoteFound;