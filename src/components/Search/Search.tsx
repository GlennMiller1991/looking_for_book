import React, {useState} from 'react';
import API from '../../api/api';
import styles from './Search.module.css'

type bookType = {
    kind?: string,
    "id"?: string,
    "etag"?: string,
    "selfLink"?: string,
    "volumeInfo"?: {
        "title"?: string,
        "subtitle"?: string,
        "authors"?: string[],
        "publishedDate"?: string,
        "description"?: string,
        "industryIdentifiers"?: [
            {
                "type": string,
                "identifier": string
            }
        ],
        "readingModes"?: {
            "text": boolean,
            "image": boolean
        },
        "pageCount"?: number,
        "printType"?: string,
        "categories"?: string[],
        "maturityRating"?: string,
        "allowAnonLogging"?: boolean,
        "contentVersion"?: string,
        "panelizationSummary"?: {
            "containsEpubBubbles": boolean,
            "containsImageBubbles": boolean
        },
        "imageLinks"?: {
            "smallThumbnail": string,
            "thumbnail": string,
        },
        "language"?: string,
        "previewLink"?: string,
        "infoLink"?: string,
        "canonicalVolumeLink"?: string,
    },
    "saleInfo"?: {
        "country": string,
        "saleability": string,
        "isEbook": false
    },
    "accessInfo"?: {
        "country": string,
        "viewability": string,
        "embeddable": boolean,
        "publicDomain": boolean,
        "textToSpeechPermission": string,
        "epub"?: {
            "isAvailable": boolean
        },
        "pdf"?: {
            "isAvailable": boolean
        },
        "webReaderLink"?: string,
        "accessViewStatus"?: string,
        "quoteSharingAllowed"?: boolean,
    },
    "searchInfo"?: {
        "textSnippet": string,
    },
}
type bookSearchType = {
    kind: string,
    totalItems: number,
    items: bookType[],
}
const initialData: bookSearchType = {
    kind: '',
    totalItems: 0,
    items: [],
}
const Lesson3 = () => {
    const [searchName, setSearchName] = useState('How to use this API');
    const [serachResult, setSerachResult] = useState<bookSearchType>(initialData);
    const [errorTitleRequest, setErrorTitleRequest] = useState<boolean>(false)
    const searchFilm = () => {
        if (errorTitleRequest) setErrorTitleRequest(false)
        API.searchFilmsByTitle(searchName)
            .then(data => {
                setSerachResult(data)
                setSearchName('')
            })
            .catch(() => setErrorTitleRequest(true))
    };
    console.log(serachResult)
    return (
        <div>
            <h1>Google Books Api</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
            </div>
            <div>
                {serachResult?.items[0]?.volumeInfo?.description}
            </div>
            <hr/>
        </div>
    );
}
export default Lesson3;

type BookPropsType = {
    book: bookType,
}
export const Book: React.FC<BookPropsType> = (props) => {
    return (
        <div className={styles.movie}>
{/*            <img src={props.book.volumeInfo?.description}
                 alt={'no poster'} className={styles.poster}/>*/}
            <div className={styles.rest}>
                {props.book.volumeInfo?.description}
                <hr/>
{/*                {props.book.Released}
                <hr/>
                {props.book.Plot}
                <hr/>
                {props.book.Actors}
                <hr/>
                {props.book.Awards}
                <hr/>*/}
            </div>
        </div>
    )
}