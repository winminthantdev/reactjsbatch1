import { configureStore } from "@reduxjs/toolkit";
import postreducer from "./postreducer";

export default configureStore({
  reducer: {
    posts:postreducer,
  },
});
