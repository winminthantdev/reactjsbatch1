import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchposts = createAsyncThunk(

  "posts/fetchusers",
  async (obj, {rejectWithValue}) => {

    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data;

    } catch (error) {
        return rejectWithValue("Something went wrong, try again!",error);      
    }
  }
);

// tunks to fetch comments
export const fetchcomments = createAsyncThunk(

  "data/fetchcomments",
  async (_, {rejectWithValue}) => {

    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
      return res.data;
    } catch (error) {
        return rejectWithValue("Something went wrong, try again!",error);      
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",

  initialState: {
    posts:[],
    comments:[],
    favorites:[],
    loading: false,
    error:null
  },

  reducers: {

    togglefavorite: (state, action) => {
      // console.log(action);
      
      const postid = action.payload;

      // console.log(state.favorites);
      
      if(state.favorites.includes(postid)){
        state.favorites = state.favorites.filter(id => id !== postid);
      }else{
        state.favorites.push(postid);
      }

    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchposts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchposts.fulfilled, (state, action) => {
        // console.log(action.payload);
        
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchposts.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchcomments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchcomments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchcomments.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
      });;
  },
});

export const { togglefavorite } = postsSlice.actions; // after thunk
export default postsSlice.reducer;

// 13PR