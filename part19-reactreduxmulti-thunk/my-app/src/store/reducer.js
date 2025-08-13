const initstate ={
    balance:0
}

function reducer(state=initstate,action){

    // console.log(state);
    // console.log(action);
    // console.log(action.type);
    // console.log(action.payload);

    switch(action.type){
        case "DEPOSIT":
            return {balance:state.balance + action.payload};
        case "WITHDRAW":
            // return {balance:state.balance - action.payload};

            if(state.balance - action.payload < 0){
                alert("Insufficient Funds! , Cannot withdraw anymore!");
                return state;
            }

            return {balance:state.balance - action.payload};

        default: 
            return state;
    }
    
}

export default reducer;