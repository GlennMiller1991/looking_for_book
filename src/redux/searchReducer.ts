//constants
const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY'
const RENEW_SEARCH_RESULTS = 'RENEW_SEARCH_RESULTS'

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
type bookSearchType = {
    kind: string,
    totalItems: number,
    items: bookType[],
}
export type searchStateType = {
    searchResult: bookSearchType,
    pageSize: number,
    toRender: number,
    searchQuery: string | false,
    needToRender: bookType[],
    wasRendered: bookType[],
}
type actionsType = changeSearchQueryActionType
    | renewSearchResultsActionType

type changeSearchQueryActionType = ReturnType<typeof changeSearchQuery>
type renewSearchResultsActionType = ReturnType<typeof renewSearchResults>

//action creators
export const renewSearchResults = (searchResult: bookSearchType) => {
    return {
        type: RENEW_SEARCH_RESULTS,
        payload: {
            ...searchResult,
        },
    } as const
}
export const changeSearchQuery = (searchQuery: string) => {
    return {
        type: CHANGE_SEARCH_QUERY,
        payload: {
            searchQuery,
        }
    } as const
}

//data
const initialData: searchStateType = {
    pageSize: 2,
    toRender: 0,
    searchResult: {
        kind: '',
        totalItems: 0,
        items: [],
    },
    searchQuery: '',
    needToRender: [],
    wasRendered: [],
}

export const searchReducer = (state: searchStateType = initialData, action: actionsType) => {
    switch (action.type) {
        case RENEW_SEARCH_RESULTS:
            return {
                ...state,
                searchResult: {
                    ...action.payload
                },
            }
        case CHANGE_SEARCH_QUERY:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}