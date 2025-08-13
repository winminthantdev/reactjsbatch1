import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addtodo } from "../../store/todosreducer";


export default function AddTodo(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (e)=>{
        e.preventDefault();

        try {
            await dispatch(addtodo({name,email})).unwrap();
            navigate('/')
        } catch (err) {
            console.log("Add todo failed : ",err);
        }
    }

    return (
        <div>
            <h3>Add New todo</h3>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};