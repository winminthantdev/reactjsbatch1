import React from "react";
import { useSelector, useDispatch } from 'react-redux'


function Home(){
    // return <h1>Home</h1>

    const balance = useSelector((state) => state.account.balance); // Access State
    return <h1>Main Balance : {balance}</h1>
}

export default Home;