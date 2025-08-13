import { useState } from 'react'
import './App.css'
import { readarticle,writearticle,increment,decrement } from './store/taskfun'
import { useSelector,useDispatch } from 'react-redux'



function App() {

  const todo = useSelector((state) => state.todo.task); // Access state
  const times = useSelector((state) => state.times.count); // Access state
  const dispatch = useDispatch();

  return (

    <section>
      <h1>Todo : {todo}. {times} already</h1>
      <button type="button" onClick={()=>dispatch(readarticle())} >Read Article</button>
      <button type="button" style={{marginLeft:"10px"}} onClick={()=>dispatch(writearticle())} >Write Article</button>
      <button type="button" style={{marginLeft:"10px"}} onClick={()=>dispatch(increment())} >Increment</button>
      <button type="button" style={{marginLeft:"10px"}} onClick={()=>dispatch(decrement())} >Decrement</button>
    </section>
  )
}

export default App


// 23ST