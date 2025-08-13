const initialState = {
    loan:false
}

function reducerforloadn(state=initialState,action){

    switch(action.type){
        case "APPLY":
            return {loan:true}
        default:
            return state
    }

}

export default reducerforloadn;