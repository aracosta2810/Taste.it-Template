import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import offersReducer from "./OffersSlice";

const store = configureStore({
    reducer:{
        offers: offersReducer
    },
    middleware: [thunk]
})

export default store;