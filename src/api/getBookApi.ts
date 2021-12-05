import {serverApi} from "./api";
import {bookSearchType} from "../redux/searchReducer";

export const booksAPI = {
    getBooks(title: string, pageSize: number, startIndex: number, orderBy: string, subject: string) {
        const url = `?q=${title}` +
            (subject === `all` ? `` : `+subject:${subject}`) +
                    `&maxResults=${pageSize}` +
                    `&startIndex=${startIndex}&orderBy=${orderBy}`
        return serverApi
            .get<bookSearchType>(url)
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