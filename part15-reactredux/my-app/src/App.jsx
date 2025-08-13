import { useState } from 'react'
import './App.css'
import { readarticle,writearticle } from './store/taskfun'
import { useSelector,useDispatch } from 'react-redux'



function App() {

  const todo = useSelector((state) => state.todo.task); // Access state
  const dispatch = useDispatch();

  return (

    <section>
      <h1>Todo : {todo}</h1>
      <button type="button" onClick={()=>dispatch(readarticle())} >Read Article</button>
      <button type="button" style={{marginLeft:"10px"}} onClick={()=>dispatch(writearticle())} >Write Article</button>
    </section>
  )
}

export default App
