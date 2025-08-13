import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { applyLoanAysnc } from "../actions/actionloan";

function Home(){
    // return <h1>Home</h1>


    const balance = useSelector(state => state.account.balance); // Access State
    const loan = useSelector(state => state.loan.loan); // Access State
    const loading = useSelector(state => state.loader.loading); // Access Lading State

    const dispatch = useDispatch();

    const loanHandler = ()=>{
        dispatch({type:"APPLY"})
    }

    const loanLoadingHandler = ()=>{
        dispatch(applyLoanAysnc())
    }

    return(
        <div>
            <h1>Main Balance : {balance}</h1>
            <h3>{loan ?" You already apply loan!" : "Do you want Loan from bank ?"}</h3>
            {/* <button type="button" onClick={()=>loanHandler()} disabled={loan ? true : ''}>
                { loan ? "Loan Applied" : "Apply Loan"}
            </button> */}

            <button type="button" onClick={loanLoadingHandler} disabled={loan || loading}>
            {loading ? "Processing..." : loan ? "Loan Applied" : "Apply Loan"}
            </button>

        </div>
    )

}

export default Home;