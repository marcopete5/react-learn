import { createStore, combineReducers } from "redux";
import recipes from "./recipes";

const rootReducer = (combineReducers({recipes}));

let store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

export default store;

