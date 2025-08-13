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

export {readarticle,writearticle}