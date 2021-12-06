import {bookPageType, bookReducer, fullBookType, OK} from "./bookReducer";
import {setBook} from "./actions";
import {mockUser} from './testData'

let initialState: bookPageType
beforeEach(() => {
    initialState = {
        id: OK,
        kind: '',
    }
})

test('set user to state', () => {
    //@ts-ignore
    let newState: fullBookType = bookReducer(initialState, setBook(mockUser))

    expect(initialState.id).toBe(OK)
    expect(initialState.kind).toBe('')

    expect(newState.id).toBe('0')
    expect(newState.kind).toBe('kind')
    expect(newState.volumeInfo.pageCount).toBe(100)
})