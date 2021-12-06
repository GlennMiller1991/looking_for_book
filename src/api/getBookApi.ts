import {serverApi} from "./api";
import {bookSearchType} from "../redux/searchReducer";
import {bookPageType, ERROR} from "../redux/bookReducer";

export const booksAPI = {
    getBooks(title: string, pageSize: number, startIndex: number, orderBy: string, subject: string) {
        const url = `?q=${title}` +
            (subject === `all` ? `` : `+subject:${subject}`) +
            `&maxResults=${pageSize}` +
            `&startIndex=${startIndex}&orderBy=${orderBy}`
        return serverApi
            .get<bookSearchType>(url)
            .then(response => {
                if(response.data.totalItems <= startIndex) throw Error('There is no more books with this title')
                else return response.data
            })
            .catch(err => {
                return {
                    totalItems: -1,
                    items: [],
                    kind: err.message,
                }
            })
    },
    getBook(id: string) {
        const url = `/${id}?`
        return serverApi
            .get<bookPageType>(url)
            .then(response => response.data)
            .catch(err => {
                return {
                    id: ERROR,
                    kind: err.message
                }
            })

    }
}