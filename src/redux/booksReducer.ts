import {bookType} from "./searchReducer";
import {actionsType} from "./store";
import {
    ADD_SEARCH_RESULT,
    CHANGE_IS_LOADING_STATUS,
    CHANGE_SEARCH_QUERY,
    RENEW_SEARCH_RESULTS,
    SET_ERROR_MESSAGE
} from "./actions";

//types
export type booksType = {
    books: bookType[],
    isLoading: boolean,
    totalCount: number,
    error: string,
}

//data
const initialState: booksType = {
    books: [],
    isLoading: false,
    totalCount: 0,
    error: '',
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
                isLoading: false,
                books: [...action.payload.books],
                error: '',
            }
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                isLoading: false,
                books: [...state.books, ...action.payload.books],
                error: '',
            }
        case SET_ERROR_MESSAGE:
        case CHANGE_IS_LOADING_STATUS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}