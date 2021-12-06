import {booksReducer, booksType} from "./booksReducer";
import {changeSearchQuery, renewSearchResults, setErrorMessage} from "./actions";
import {mockBooksArray} from "./testData";

let initialState: booksType
beforeEach(() => {
    initialState = {
        books: [],
        isLoading: false,
        totalCount: 0,
        error: '',
        needToSearch: true,
    }
})

test('searchQuery after reducer must be equal previous value', () => {
    let newState = booksReducer(
        initialState,
        changeSearchQuery(
            'is this is clean function?',
            'all',
            'newest'
        )
    )

    expect(initialState.books.length).toBe(0)
    expect(initialState.totalCount).toBe(0)
    expect(initialState.isLoading).toBe(false)
    expect(initialState.error).toBe('')

    expect(newState.books.length).toBe(initialState.books.length)
    expect(newState.totalCount).toBe(initialState.totalCount)
    expect(newState.isLoading).toBe(initialState.isLoading)
    expect(newState.error).toBe(newState.error)
})
test('add books to state. renewSearchResult', () => {
    let newState = booksReducer(
        initialState,
        renewSearchResults(
            mockBooksArray, 100
        )
    )

    expect(initialState.books.length).toBe(0)
    expect(initialState.totalCount).toBe(0)
    expect(initialState.isLoading).toBe(false)
    expect(initialState.error).toBe('')

    expect(newState.books.length).toBeGreaterThanOrEqual(4)
    expect(newState.totalCount).toBe(100)
    expect(newState.isLoading).toBe(false)
    expect(newState.error).toBe('')
})
test('set error message', () => {
    let newState = booksReducer(
        initialState,
        setErrorMessage('error')
    )

    expect(initialState.books.length).toBe(0)
    expect(initialState.totalCount).toBe(0)
    expect(initialState.isLoading).toBe(false)
    expect(initialState.error).toBe('')

    expect(newState.books.length).toBe(0)
    expect(newState.totalCount).toBe(0)
    expect(newState.isLoading).toBe(false)
    expect(newState.error).toBe('error')
})