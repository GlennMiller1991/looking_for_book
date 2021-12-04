//constants
import {bookType} from "./searchReducer";

export const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY'
export const RENEW_SEARCH_RESULTS = 'RENEW_SEARCH_RESULTS'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'
export const CHANGE_IS_LOADING_STATUS = 'CHANGE_IS_LOADING_STATUS'

//types
export type changeSearchQueryActionType = ReturnType<typeof changeSearchQuery>
export type renewSearchResultsActionType = ReturnType<typeof renewSearchResults>
export type addSearchResultsActionType = ReturnType<typeof addSearchResults>
export type changeIsLoadingStatusActionType = ReturnType<typeof changeIsLoadingStatus>

//action creators
export const addSearchResults = (books: bookType[]) => {
    return {
        type: ADD_SEARCH_RESULT,
        payload: {
            books,
            isLoading: false,
        },
    } as const
}
export const renewSearchResults = (books: bookType[], totalCount: number) => {
    return {
        type: RENEW_SEARCH_RESULTS,
        payload: {
            books,
            totalCount,
            isLoading: false,
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