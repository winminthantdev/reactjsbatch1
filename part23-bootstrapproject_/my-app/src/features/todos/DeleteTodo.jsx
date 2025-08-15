import { useState } from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {useNavigate,useParams } from 'react-router';
import {deletetodo} from './../../store/todosreducer';

export default function DeleteTodo(){

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = (e)=>{

    dispatch(deletetodo(Number(id)))
      .unwrap()
      .then(()=>{
        navigate('/');
      })
      .catch(err=>console.log(err));
  }

  return (
    <div>
      <h3>Are you sure you want to delete this todo?</h3>
      <button type="button" onClick={deleteHandler}>Yes, Delete</button>
      <button type="button" onClick={()=>navigate(-1)}>Cancel</button>
    </div>
  )
}

// 29EU 