import {bookType} from "./searchReducer";
import {bookPageType} from "./bookReducer";

//constants
export const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY'
export const RENEW_SEARCH_RESULTS = 'RENEW_SEARCH_RESULTS'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'
export const CHANGE_IS_LOADING_STATUS = 'CHANGE_IS_LOADING_STATUS'
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'
export const SET_BOOK = 'SET_BOOK'
export const CHANGE_NEED_TO_SEARCH = 'CHANGE_NEED_TO_SEARCH'

//types
export type changeSearchQueryActionType = ReturnType<typeof changeSearchQuery>
export type renewSearchResultsActionType = ReturnType<typeof renewSearchResults>
export type addSearchResultsActionType = ReturnType<typeof addSearchResults>
export type changeIsLoadingStatusActionType = ReturnType<typeof changeIsLoadingStatus>
export type setErrorMessageActionType = ReturnType<typeof setErrorMessage>
export type setBookActionType = ReturnType<typeof setBook>
export type changeNeedToSearchActionType = ReturnType<typeof changeNeedToSearch>

//action and thunk creators
export const changeNeedToSearch = (needToSearch: boolean) => {
    return {
        type: CHANGE_NEED_TO_SEARCH,
        payload: {
            needToSearch,
        }
    } as const
}
export const setBook = (book: bookPageType) => {
    return {
        type: SET_BOOK,
        payload: {
            ...book,
        }
    } as const
}
export const setErrorMessage = (error: string) => {
    return {
        type: SET_ERROR_MESSAGE,
        payload: {
            error,
            isLoading: false,
        }
    } as const
}
export const addSearchResults = (books: bookType[]) => {
    return {
        type: ADD_SEARCH_RESULT,
        payload: {
            books,
        },
    } as const
}
export const renewSearchResults = (books: bookType[], totalCount: number) => {
    return {
        type: RENEW_SEARCH_RESULTS,
        payload: {
            books,
            totalCount,
        },
    } as const
}
export const changeSearchQuery = (queryString: string, filter: string, sort: string) => {
    return {
        type: CHANGE_SEARCH_QUERY,
        payload: {
            queryString,
            filter,
            sort,
            needToSearch: true,
        }
    } as const
}
export const changeIsLoadingStatus = (isLoading: boolean) => {
    return {
        type: CHANGE_IS_LOADING_STATUS,
        payload: {
            isLoading,
        }
    } as const
}