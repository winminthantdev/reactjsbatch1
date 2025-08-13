import React from "react";
import { use } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { depositAsync } from "../actions/actiondeposit";

function Deposit(){
    
    // return <h1>Deposit</h1>

    const balance = useSelector((state) => state.account.balance); // Access State
    const loading = useSelector((state) => state.loader.loading); // Access loading State

    const dispatch = useDispatch();
    const depositHandler = (amount)=>{
        dispatch({type:'DEPOSIT',payload:amount})
    }


    const depositloadingHandler = () =>{
        dispatch(depositAsync(10));
    }

    return(
        <div>
            <h1>Main Balance : {balance}</h1>
            {/* { loading && <div>Loading...</div> } */}

            <button onClick={()=>depositHandler(10)}>Deposit</button>

            {/* <button onClick={()=>depositloadingHandler()}>Deposit $10</button> */}
            {/* <button onClick={depositloadingHandler}>Deposit $10</button> */}

            <button onClick={depositloadingHandler}>
                {loading ? "Processing..." : "Deposit $10"}
            </button>


        </div>
    )

}

export default Deposit;