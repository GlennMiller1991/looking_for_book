import {bookType} from "./searchReducer";
import {actionsType} from "./store";
import {
    CHANGE_IS_LOADING_STATUS, CHANGE_NEED_TO_SEARCH,
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
    needToSearch: boolean,
}

//data
const initialState: booksType = {
    books: [],
    isLoading: false,
    totalCount: 0,
    error: '',
    needToSearch: true,
}

export const booksReducer = (state: booksType = initialState, action: actionsType) => {
    switch (action.type) {
        case CHANGE_SEARCH_QUERY:
            return {
                ...initialState,
                needToSearch: true,
            }
        case RENEW_SEARCH_RESULTS:
            return {
                ...state,
                totalCount: action.payload.totalCount,
                isLoading: false,
                books: [...state.books, ...action.payload.books],
                error: '',
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            }
        case CHANGE_NEED_TO_SEARCH:
        case CHANGE_IS_LOADING_STATUS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}