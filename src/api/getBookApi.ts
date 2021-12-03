import {serverApi} from "./api";
import {bookSearchType} from "../redux/searchReducer";

export const booksAPI = {
    getBooks(title: string, pageSize: number, startIndex: number) {
        return serverApi
            .get<bookSearchType>(`?q=${title}&maxResults=${pageSize}&startIndex=${startIndex}`)
            .then(response => {
                console.log(response)
                return response.status === 200 ?
                    response.data :
                    {
                        totalItems: -1,
                        items: [],
                        kind: 'Unknown error'
                    }
            })
            .catch(err => {
                return {
                    totalItems: -1,
                    items: [],
                    kind: err.message,
                }
            })
    }
}