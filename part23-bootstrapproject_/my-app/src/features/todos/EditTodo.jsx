import { useState } from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {useNavigate,useParams } from 'react-router';
import {updatetodo} from './../../store/todosreducer';


export default function UpdateTodo(){

  const {id} = useParams();
  const currenttodo = useSelector((state)=>state.todos.todos.find((todo) => todo.id === parseInt(id)))
  const [title,setTitle] = useState(currenttodo?.title || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const submitHandler = (e)=>{
    e.preventDefault();

    dispatch(updatetodo({id:parseInt(id),title}))
      .unwrap()
      .then(()=>{
        navigate('/');
      });
  }

  if(!currenttodo) return <p>Todo not found.</p>
  
  return (
    <div>
      <h3>Update Todo</h3>
      <form onSubmit={submitHandler}>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Your Title" />
          <button type="submit">Update</button>
      </form>
    </div>
  )
}

// 29EU 