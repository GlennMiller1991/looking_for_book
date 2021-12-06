import {changeIsLoadingStatus, renewSearchResults, setErrorMessage} from "./actions";
import {booksAPI} from "../api/getBookApi";
import {dispatchType} from "./store";

export const getBooks = (queryString: string,
                         pageSize: number,
                         startIndex: number,
                         sort: string,
                         filter: string,
                         totalCount?: number) => {
    return (dispatch: dispatchType) => {
        dispatch(changeIsLoadingStatus(true))
        setTimeout(() => {
            booksAPI.getBooks(queryString,
                pageSize,
                startIndex,
                sort,
                filter)
                .then(data => {
                    if (data.totalItems === -1) {
                        dispatch(setErrorMessage(data.kind))
                    } else {
                        dispatch(renewSearchResults(data.items, totalCount || data.totalItems))
                    }
                })
        }, 2000)
    }
}