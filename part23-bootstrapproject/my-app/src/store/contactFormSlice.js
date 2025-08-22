import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = `http://localhost:5000/api/contacts`;

export const submitContactForm = createAsyncThunk('contacts/formsubmit',async(formData,{rejectWithValue})=>{
    try {
      const res = await axios.get(`${BASE_URL}/formsubmit`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Something went wrong");
    }
});


const contactFormSubmit = createSlice({
    name:'contactforms',
    initialState:{
      loading:false,
      error:null,
      successMessge: null
    },

  reducers: {
    resetFormState:(state)=>{
      state.loading = false;
      state.error = null;
      state.successMessge = null;
    }
  },

  extraReducers:(builder)=>{
    builder
        .addCase(submitContactForm.pending,(state)=>{
            state.loading = true;
            state.error = null;
            state.successMessge = null;
        })
        .addCase(submitContactForm.fulfilled,(state,action)=>{
            state.loading = false;
            state.successMessge = action.payload.message;
        })
        .addCase(submitContactForm.rejected,(state,action)=>{
            state.loading = false;
            state.successMessge = action.payload;
        });

  }

});

export const {resetFormState} = contactFormSubmit.actions;
export default contactFormSubmit.reducer;