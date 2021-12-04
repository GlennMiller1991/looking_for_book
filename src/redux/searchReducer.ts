import {actionsType} from "./store";
import {CHANGE_SEARCH_QUERY} from "./actions";

//types
export type bookType = {
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
        categories?: string[],
        maturityRating: string,
        allowAnonLogging: boolean,
        contentVersion: string,
        panelizationSummary: {
            containsEpubBubbles: boolean,
            containsImageBubbles: boolean
        },
        imageLinks?: {
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
    queryString: string,
    filter: string,
    sort: string,
}

//data
const initialData: booksPageType = {
    pageSize: 2,
    queryString: '',
    filter: 'All',
    sort: 'relevance',
}

export const searchReducer = (state: booksPageType = initialData, action: actionsType) => {
    switch (action.type) {
        case CHANGE_SEARCH_QUERY:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}