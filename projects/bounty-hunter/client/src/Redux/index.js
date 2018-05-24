import {createStore, combineReducers} from 'redux';
import bounties from "./bounty";

const rootReducer = (combineReducers({bounties})) ;

let store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
})

export default store;
