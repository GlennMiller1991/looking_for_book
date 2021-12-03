//constants
const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY'
const RENEW_SEARCH_RESULTS = 'RENEW_SEARCH_RESULTS'
const CHANGE_IS_LOADING_STATUS = 'CHANGE_IS_LOADING_STATUS'

//types
type bookType = {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: {
        title: string,
        subtitle: string,
        authors: string[],
        publishedDate: string,
        description: string,
        industryIdentifiers: [
            {
                type: string,
                identifier: string
            }
        ],
        readingModes: {
            text: boolean,
            image: boolean
        },
        pageCount: number,
        printType: string,
        categories: string[],
        maturityRating: string,
        allowAnonLogging: boolean,
        contentVersion: string,
        panelizationSummary: {
            containsEpubBubbles: boolean,
            containsImageBubbles: boolean
        },
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string,
        },
        language: string,
        previewLink: string,
        infoLink: string,
        canonicalVolumeLink: string,
    },
    saleInfo: {
        country: string,
        saleability: string,
        isEbook: false
    },
    accessInfo: {
        country: string,
        viewability: string,
        embeddable: boolean,
        publicDomain: boolean,
        textToSpeechPermission: string,
        epub: {
            isAvailable: boolean
        },
        pdf: {
            isAvailable: boolean
        },
        webReaderLink: string,
        accessViewStatus: string,
        quoteSharingAllowed: boolean,
    },
    searchInfo: {
        textSnippet: string,
    },
}
export type bookSearchType = {
    kind: string,
    totalItems: number,
    items: bookType[],
}
export type booksPageType = {
    pageSize: number,
    totalCount: number,
    books: bookType[],
    isLoading: boolean,
    queryString: string,
}
type actionsType = changeSearchQueryActionType
    | renewSearchResultsActionType
    | changeIsLoadingStatusActionType

type changeSearchQueryActionType = ReturnType<typeof changeSearchQuery>
type renewSearchResultsActionType = ReturnType<typeof renewSearchResults>
type changeIsLoadingStatusActionType = ReturnType<typeof changeIsLoadingStatus>

//action creators
export const changeIsLoadingStatus = (isLoading: boolean) => {
    return {
        type: CHANGE_IS_LOADING_STATUS,
        payload: {
            isLoading,
        }
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
export const changeSearchQuery = (queryString: string) => {
    return {
        type: CHANGE_SEARCH_QUERY,
        payload: {
            queryString,
        }
    } as const
}

//data
const initialData: booksPageType = {
    pageSize: 2,
    books: [],
    isLoading: false,
    totalCount: 0,
    queryString: '',
}

export const searchReducer = (state: booksPageType = initialData, action: actionsType) => {
    switch (action.type) {
        case RENEW_SEARCH_RESULTS:
            return {
                ...state,
                totalCount: action.payload.totalCount,
                isLoading: action.payload.isLoading,
                books: [...state.books, ...action.payload.books],
            }
        case CHANGE_IS_LOADING_STATUS:
        case CHANGE_SEARCH_QUERY:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}