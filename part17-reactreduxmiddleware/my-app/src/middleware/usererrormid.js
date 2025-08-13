const userlog = store => next => action => {

    const result = next(action); // send action to reducer
    
    if((action.type == "LOGIN_ERROR")){
        console.log(action.payload.customerror);
        
    }else{
        return result;
    }
}

export default userlog;