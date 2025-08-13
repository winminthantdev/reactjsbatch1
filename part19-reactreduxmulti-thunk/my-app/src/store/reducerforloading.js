const initstate ={
  loading:false
}

function reducerforloading(state=initstate,action){

  switch(action.type){
      case "LOADING_START":
          return {...state,loading:true};
      case "LOADING_END":
        return {...state,loading:false};
      default: 
          return state;
  }
  
}

export default reducerforloading;