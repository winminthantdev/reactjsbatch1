const log = (store) => (next) => (action) =>{

    // console.log(store);
    // console.log(next);
    // console.log(action);                        // dispatch action
    // console.log(store.getState());              // updated state

    const result = next(action)
    return result;
    
}

export default log;