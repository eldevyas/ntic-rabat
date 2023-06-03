import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Reducers } from "./Reducers";


const rootReducer = combineReducers({
    Reducers: Reducers
});
// Create the Redux store
const Store = configureStore({
  reducer: rootReducer,
});

export default Store;