const initialStae = {
    task: "Nothing to do",
    count: 0
}

function reducer(state = initialStae,action){

    switch(action.type){
        case "READ":
            return {task:"Aung Aung is reading Ariticle"}
        case "WRITE":
            return {task:"Aung Aung is writing Ariticle"}
        default:
            return state;
    }
}

function timesreducer(state = initialStae,action){

    switch(action.type){
        case "INCREMENT":
            return {
                ...state, // optional
                count:state.count + 1
            }
        case "DECREMENT":
            return {
                ...state, // optional
                count:state.count - 1
            }
        default:
            return state;
    }
}

export {reducer,timesreducer};