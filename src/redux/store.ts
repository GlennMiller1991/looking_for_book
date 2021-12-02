import { combineReducers, createStore } from "redux";
import {searchReducer} from "./searchReducer";

const rootReducer = combineReducers({
    searchResults: searchReducer,
})

export const store = createStore(rootReducer)

//types
export type stateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch