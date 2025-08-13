import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./usersreducer";

export default configureStore({
    reducer:{
        users:usersReducer
    }
});