import React from "react";
import { useNavigate } from "react-router-dom";

function NewLetter(){

  const navigate = useNavigate();

  const clickhandler = () =>{
    console.log('i am newletters');
    return navigate('/home');
  } 
 return (
   <div>
     <h1>NewLetter page</h1>
     <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil repellat voluptas
       distinctio at perspiciatis perferendis veritatis iste suscipit labore ab, nemo maxime
       doloremque quaerat obcaecati. Eum pariatur quae ipsum.
     </p>

     <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil repellat voluptas
       distinctio at perspiciatis perferendis veritatis iste suscipit labore ab, nemo maxime
       doloremque quaerat obcaecati. Eum pariatur quae ipsum.
     </p>

     <button type="button" onClick={clickhandler}>Back to Home</button>
   </div>
 );
}

export default NewLetter;