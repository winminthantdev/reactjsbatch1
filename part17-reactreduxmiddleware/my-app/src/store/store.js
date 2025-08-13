// without Redux Logger
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./reducer";
// import log from "../middleware/log";

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
//   // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(log)
//   middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),log]
// });


// => with Redux Logger
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./reducer";
// import log from "../middleware/log";
// import { createLogger } from 'redux-logger'


// const logger = createLogger();

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
//   // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
//   middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),logger]
// });



// => with Redux Logger with customerrormid
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";
import userlog from "../middleware/usererrormid";
import { createLogger } from 'redux-logger'


const logger = createLogger();

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger,userlog)
  middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),logger,userlog]
});


// 30MD