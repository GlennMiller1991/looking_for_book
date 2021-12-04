import {bookType} from "./searchReducer";
import {actionsType} from "./store";
import {ADD_SEARCH_RESULT, CHANGE_IS_LOADING_STATUS, CHANGE_SEARCH_QUERY, RENEW_SEARCH_RESULTS} from "./actions";

//types
export type booksType = {
    books: bookType[],
    isLoading: boolean,
    totalCount: number,
}

//data
const initialState: booksType = {
    books: [],
    isLoading: false,
    totalCount: 0,
}

export const booksReducer = (state: booksType = initialState, action: actionsType) => {
    switch(action.type) {
        case CHANGE_SEARCH_QUERY:
            return {
                ...initialState,
            }
        case RENEW_SEARCH_RESULTS:
            return {
                ...state,
                totalCount: action.payload.totalCount,
                isLoading: action.payload.isLoading,
                books: [...action.payload.books],
            }
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                books: [...state.books, ...action.payload.books],
            }
        case CHANGE_IS_LOADING_STATUS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}