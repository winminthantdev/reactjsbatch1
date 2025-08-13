import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {addtodo} from './../../store/todosreducer';


export default function AddTodo(){

  const [title,setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const submitHandler = async (e)=>{
    e.preventDefault();

    try{
      await dispatch(addtodo({title})).unwrap();
      navigate('/');
      
    }catch(err){
      console.log("Add use failed : ",err)
    }
  }

  return (
    <div>
      <h3>Add New Todo</h3>
      <form onSubmit={submitHandler}>
          <input type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

// 12TD 