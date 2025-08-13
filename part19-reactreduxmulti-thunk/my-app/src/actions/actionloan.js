export const applyLoanAysnc = () =>{
    return (dispatch) =>{

        dispatch({type:"LOADING_START"});

        setTimeout(() => {
            dispatch({type:'APPLY'});
            dispatch({type:"LOADING_END"});
        }, 2000);


    }
}


// 6AH