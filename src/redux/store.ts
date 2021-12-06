import {applyMiddleware, combineReducers, createStore} from "redux";
import {searchReducer} from "./searchReducer";
import {booksReducer} from "./booksReducer";
import {
    changeIsLoadingStatusActionType, changeNeedToSearchActionType,
    changeSearchQueryActionType,
    renewSearchResultsActionType, setBookActionType, setErrorMessageActionType
} from "./actions";
import {bookReducer} from "./bookReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    searchResults: searchReducer,
    books: booksReducer,
    book: bookReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

//types
export type stateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch
export type actionsType = changeSearchQueryActionType
    | renewSearchResultsActionType
    | changeIsLoadingStatusActionType
    | setErrorMessageActionType
    | setBookActionType
    | changeNeedToSearchActionType