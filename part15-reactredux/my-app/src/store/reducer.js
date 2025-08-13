const initialStae = {
    task: "Nothing to do"
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

export default reducer;