import React from 'react';
import { useSelector , useDispatch} from 'react-redux'

import { useEffect, useState} from 'react'
import { fetchtodos, addtodo, updatetodo, deletetodo } from './store/todosreducer';
import './App.css'


function App() {

  const { todos, loading, error } = useSelector(state=>state.todos)

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');


  useEffect(()=>{
    dispatch(fetchtodos())
  },[dispatch])


  const submitHandler = (e) =>{
    e.preventDefault();

    if(title.trim){
      dispatch(addtodo(title));
      setTitle('');
    }
  }

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error : {error}</p>

  return (
   <div>
    <h3>To Do List</h3>
    <form onSubmit={submitHandler}>
      <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
      <button type='submit'>Add Task</button>
    </form>

    <ul>
      {todos.map((todo, idx)=>(
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={()=> dispatch(updatetodo({...todo, completed: !todo.completed}))} />
          {todo.title}
          <button onClick={() => dispatch(deletetodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>

   </div>
  )
}

export default App
