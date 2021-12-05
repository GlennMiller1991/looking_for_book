import {combineReducers, createStore} from "redux";
import {searchReducer} from "./searchReducer";
import {booksReducer} from "./booksReducer";
import {
    addSearchResultsActionType,
    changeIsLoadingStatusActionType,
    changeSearchQueryActionType,
    renewSearchResultsActionType, setBookActionType, setErrorMessageActionType
} from "./actions";
import {bookReducer} from "./bookReducer";

const rootReducer = combineReducers({
    searchResults: searchReducer,
    books: booksReducer,
    book: bookReducer,
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
    | setBookActionType