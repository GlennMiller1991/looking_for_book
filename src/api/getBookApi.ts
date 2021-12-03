import {serverApi} from "./api";
import {bookSearchType} from "../redux/searchReducer";

export const booksAPI = {
    getBooks(title: string, pageSize: number) {
        return serverApi
            .get<bookSearchType>(`?q=${title}&maxResults=${pageSize}`)
            .then(response => response.data)
            // need to catch errors
    }
}