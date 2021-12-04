import {serverApi} from "./api";
import {bookSearchType} from "../redux/searchReducer";

export const booksAPI = {
    getBooks(title: string, pageSize: number, startIndex: number, orderBy: string, subject: string) {
        return serverApi
            .get<bookSearchType>(
                `?q=${title}&maxResults=${pageSize}` +
                `&startIndex=${startIndex}&orderBy=${orderBy}` +
                `&subject=${subject}`
            )
            .then(response => response.data)
            .catch(err => {
                return {
                    totalItems: -1,
                    items: [],
                    kind: err.message,
                }
            })
    }
}