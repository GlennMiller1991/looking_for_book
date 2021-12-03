import {serverApi} from "./api";
import {bookSearchType} from "../redux/searchReducer";

export const booksAPI = {
    getBooks(title: string, pageSize: number, startIndex: number) {
        return serverApi
            .get<bookSearchType>(`?q=${title}&maxResults=${pageSize}&startIndex=${startIndex}`)
            .then(response => {
                if (response.status === 200) return response.data
                else return {totalItems: 0, items: [], kind: 'Unknown error'}
            })
            .catch(err => {
                console.log(err)
                return {
                    totalItems: 0,
                    items: [],
                    kind: 'Unknown error',
                }
            })
    }
}