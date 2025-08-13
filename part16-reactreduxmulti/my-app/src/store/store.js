// import {configureStore} from "@reduxjs/toolkit";
// import {reducer,timesreducer} from "./reducer";

// export default configureStore({
//     reducer:{
//         todo:reducer,
//         times:timesreducer
//     }
// })


import {configureStore} from "@reduxjs/toolkit";
import {reducer, timesreducer} from "./reducer";

const store =  configureStore({
    reducer:{
        todo:reducer,
        times:timesreducer
    }
})

export default store;