const initstate = {
    balance : 0
}

function reducer(state=initstate,action){
    console.log(action);
    console.log(action.type);
    
    switch(action.type){
        case 'DEPOSIT':
            return {balance:state.balance + action.payload}
        case 'WITHDRAW':
            return {balance:state.balance - action.payload}
        default:
            return state;
    }

    return state;


}

export default reducer;


// 16