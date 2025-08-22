import {configureStore} from "@reduxjs/toolkit"
import clientsaySlice from './clientsaySlice';
import contactformSlice from './contactFormSlice';


export default configureStore({
  reducer:{
    clientsays:clientsaySlice,
    contactforms:contactformSlice
  }
});