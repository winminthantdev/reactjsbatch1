import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",

  initialState: {
    list:[
      {id:1,title:"Tom & Jerry"},
      {id:2,title:"Twilight"},
      {id:3,title:"Titanic"},
    ]
  },

  reducers: {

    addmovie: (state, action) => {
      // const newmovie = {id:4,title:"3 idiots"}
      // state.list = [...state.list,newmovie]

      const newmovie = action.payload;
      state.list = [...state.list,newmovie]
      
    },

  },
});


export const { addmovie } = moviesSlice.actions;
export default moviesSlice.reducer;
