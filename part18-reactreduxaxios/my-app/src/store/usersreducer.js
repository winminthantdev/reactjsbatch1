import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchusers = createAsyncThunk(
  // 'users/fetchusers',async(obj,thunkAPI)=>{

  // // console.log(obj); // {id:1 }
  // console.log(thunkAPI);
  // // console.log(thunkAPI.getState());

  // try{
  //   const res = await axios.get('https://jsonplaceholder.typicode.com/users').then(response=>response.data);
  // // const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${obj.id}`).then(response=>response.data);
  // return res;

  // }catch(err){
  //   throw new err;
  // }
  // }

  "users/fetchusers",
  async (obj, {rejectWithValue,fulfillWithValue}) => {

    // console.log(obj); // {id:1 }
    // console.log(thunkAPI);
    // console.log(thunkAPI.getState());

    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      // return res.data;
      return fulfillWithValue(res.data);
    } catch (err) {
        return rejectWithValue("Something went wrong, try again!");      
    }
  }
);

export const usersSlice = createSlice({
  name: "users",

  initialState: {
    role: "Guest",
    users: [],
    loading: false,
  },

  reducers: {
    setrole: (state, action) => {
      state.role = action.payload || "Guest";
    },

    // getusers:(state)=>{
    // axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(response=>{
    //   console.log(response.data);

    //   state.users = response.data

    // })
    // .catch((err)=>console.log(err));
    // }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchusers.pending, (state) => {
        // console.log("Pending");
        state.loading = true;
      })
      .addCase(fetchusers.fulfilled, (state, action) => {
        console.log("Fullfilled");
        console.log(action.payload);
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchusers.rejected, (state) => {
        console.log("Rejected");
      });
  },
});

// export const { setrole,getusers } = usersSlice.actions; // before thunk
export const { setrole } = usersSlice.actions; // before thunk
export default usersSlice.reducer;

// 6AS


//  20AS