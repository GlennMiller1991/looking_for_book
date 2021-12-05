import {actionsType} from "./store";
import {SET_BOOK} from "./actions";

//constants
export const ERROR = '-1'
export const OK = '-99'

//types
type fullBookType = {
    "kind": string,
    "id": string,
    "etag": string,
    "selfLink": string,
    "volumeInfo": {
        "title": string,
        "subtitle": string,
        "authors": string[],
        "publisher": string,
        "publishedDate": string,
        "description": string,
        "industryIdentifiers":
            {
                "type": string,
                "identifier": string
            }[]
        "readingModes": {
            "text": boolean,
            "image": boolean
        },
        "pageCount": number,
        "printedPageCount": number,
        "dimensions": {
            "height": string,
        },
        "printType": string,
        "categories": string[],
        "averageRating": number,
        "ratingsCount": number,
        "maturityRating": string,
        "allowAnonLogging": boolean,
        "contentVersion": string,
        "panelizationSummary": {
            "containsEpubBubbles": boolean,
            "containsImageBubbles": boolean
        },
        "imageLinks": {
            "smallThumbnail": string,
            "thumbnail": string,
            "small": string,
            "medium": string,
            "large": string,
        },
        "language": string,
        "previewLink": string,
        "infoLink": string,
        "canonicalVolumeLink": string
    },
    "layerInfo": {
        "layers":
            {
                "layerId": string,
                "volumeAnnotationsVersion": string
            }[]
    },
    "saleInfo": {
        "country": string,
        "saleability": string,
        "isEbook": boolean,
        "listPrice": {
            "amount": number,
            "currencyCode": string
        },
        "retailPrice": {
            "amount": number,
            "currencyCode": string
        },
        "buyLink": string,
        "offers": [
            {
                "finskyOfferType": number,
                "listPrice": {
                    "amountInMicros": number,
                    "currencyCode": string
                },
                "retailPrice": {
                    "amountInMicros": number,
                    "currencyCode": string
                }
            }
        ]
    },
    "accessInfo": {
        "country": string,
        "viewability": string,
        "embeddable": boolean,
        "publicDomain": boolean,
        "textToSpeechPermission": string,
        "epub": {
            "isAvailable": boolean,
            "acsTokenLink": string,
        },
        "pdf": {
            "isAvailable": boolean
        },
        "webReaderLink": string,
        "accessViewStatus": string,
        "quoteSharingAllowed": boolean
    }
}
export type bookPageType = { id: string, kind: string} | fullBookType
const initialState: bookPageType = {
    id: OK,
    kind: '',
}

export const bookReducer = (state: bookPageType = initialState, action: actionsType) => {
    switch(action.type) {
        case SET_BOOK:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }

}