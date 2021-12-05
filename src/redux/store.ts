import {combineReducers, createStore} from "redux";
import {searchReducer} from "./searchReducer";
import {booksReducer} from "./booksReducer";
import {
    addSearchResultsActionType,
    changeIsLoadingStatusActionType,
    changeSearchQueryActionType,
    renewSearchResultsActionType, setErrorMessageActionType
} from "./actions";

const rootReducer = combineReducers({
    searchResults: searchReducer,
    books: booksReducer,
})

export const store = createStore(rootReducer)

//types
export type stateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch
export type actionsType = changeSearchQueryActionType
    | renewSearchResultsActionType
    | changeIsLoadingStatusActionType
    | addSearchResultsActionType
    | setErrorMessageActionType