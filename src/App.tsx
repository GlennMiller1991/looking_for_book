import React, {KeyboardEvent, ChangeEvent, useState, useEffect} from 'react';
import styles from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {changeSearchQuery, renewSearchResults, booksPageType, changeIsLoadingStatus} from "./redux/searchReducer";
import {stateType} from "./redux/store";
import preloader from './common/preloader.gif'
import {booksAPI} from "./api/getBookApi";
import unknownBook from './common/unknownBook.png'

function App() {
    console.log('from app')
    return (
        <div className={styles.app}>
            <Hat/>
            <Books/>
        </div>
    );
}

export default App;

export const Hat = React.memo(() => {
    console.log('from hat')
    const [searchName, setSearchName] = useState('')
    const dispatch = useDispatch()

    const onSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.currentTarget.value.trim())
    }
    const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && searchName) {
            dispatch(changeSearchQuery(searchName))
        }

    }
    return (
        <div className={styles.hat}>
            <h1>Search for books</h1>
            <div>
                <input value={searchName}
                       onChange={onSearchFieldChange}
                       onKeyPress={onEnterPress}/>
                <div>
                    <select value={'first'}>
                        <option value={'first'}>first</option>
                        <option value={'second'}>second</option>
                    </select>
                    <select value={'first'}>
                        <option value={'first'}>first</option>
                        <option value={'second'}>second</option>
                    </select>
                </div>
            </div>

        </div>
    )
})
export const Books = React.memo(() => {
    console.log('from Books')
    //data
    const state = useSelector<stateType, booksPageType>(state => state.searchResults)
    const dispatch = useDispatch()
    const onClickHandler = () => {
        dispatch(changeIsLoadingStatus(true))
        booksAPI.getBooks(state.queryString, state.pageSize, state.books.length)
            .then(data => {
                dispatch(renewSearchResults(data.items, data.totalItems))
            })
    }
    //useEffect
    useEffect(() => {
        console.log('from useEffect')
        if (state.queryString) {
            dispatch(changeIsLoadingStatus(true))
            booksAPI.getBooks(state.queryString, state.pageSize, 0)
                .then(data => {
                    dispatch(renewSearchResults(data.items, data.totalItems))
                })
        }
    }, [state.queryString])
    return (
        <React.Fragment>
            {
                state.totalCount > 0 &&
                <React.Fragment>
                    <div className={styles.booksWrapper}>
                        <div>{state.totalCount}</div>
                        <div className={styles.booksContainer}>
                            {
                                state.books.map((book, index) => {
                                    console.log(book.volumeInfo.categories)
                                    return (
                                        <Book key={index} {...book.volumeInfo}/>
                                    )
                                })
                            }
                        </div>
                        {
                            !state.isLoading && <div onClick={onClickHandler}>Load more</div>
                        }
                    </div>
                </React.Fragment>
            }
            {
                state.isLoading &&
                <div>
                    <img src={preloader} alt={'preloader'}/>
                </div>
            }
        </React.Fragment>
    )
})

type BookPropsType = {
    title: string,
    imageLinks?: {
        smallThumbnail: string,
        thumbnail: string,
    },
    authors: string[],
    categories?: string[],
    [x: string]: any,
}
export const Book: React.FC<BookPropsType> = React.memo((props) => {
    return (
        <div className={styles.book}>
            <img src={props.imageLinks ? props.imageLinks.smallThumbnail : unknownBook} alt={'bookPic'}/>
            <h3>{props.title ? props.title : ''}</h3>
            <div>
                <span className={styles.authors}>{props.authors ? props.authors : ''}</span>
            </div>
            <div>
                <span className={styles.categories}>{props.categories ? props.categories[0] : ''}</span>
            </div>
        </div>
    )
})