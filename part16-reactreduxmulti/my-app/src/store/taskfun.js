const readarticle = (state) =>{
    return{
        type:"READ",
        playload:state
    }
}

const writearticle = (state) =>{
    return{
        type:"WRITE",
        playload:state
    }
}

const increment = (state) =>{
    return{
        type:"INCREMENT",
        playload:state
    }
}

const decrement = (state) =>{
    return{
        type:"DECREMENT",
        playload:state
    }
}


export {readarticle,writearticle,increment,decrement}