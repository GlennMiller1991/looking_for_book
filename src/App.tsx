import React, {KeyboardEvent, ChangeEvent, useState, useEffect} from 'react';
import styles from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {changeSearchQuery, renewSearchResults, booksPageType, changeIsLoadingStatus} from "./redux/searchReducer";
import {stateType} from "./redux/store";
import preloader from './common/preloader.gif'
import API from "./api/api";
import {booksAPI} from "./api/getBookApi";

function App() {
    return (
        <div className={styles.app}>
            <Hat/>
            <Books/>
        </div>
    );
}

export default App;

export const Hat = React.memo(() => {
    const [searchName, setSearchName] = useState('')
    const dispatch = useDispatch()

    const onSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.currentTarget.value)
    }
    const changeSearchString = (s: string) => {
        dispatch(changeSearchQuery(s))
    }
    const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        const key = e.code
        if (key === 'Enter') {
            changeSearchString(searchName)
        }
    }
    return (
        <div className={styles.hat}>
            <h1>Search for books</h1>
            <div>
                <input value={searchName}
                       onChange={onSearchFieldChange} onKeyPress={onEnterPress}/>
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
    console.log(state)
    //useEffect
    useEffect(() => {
        if (state.queryString) {
            dispatch(changeIsLoadingStatus(true))
            booksAPI.getBooks(state.queryString, state.pageSize)
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
                                        return (
                                            <Book key={index}
                                                  title={book.volumeInfo.title}
                                                  category={book.volumeInfo.categories[0]}
                                                  imageUrl={book.volumeInfo.imageLinks.smallThumbnail}
                                                  authors={book.volumeInfo.authors}/>
                                        )
                                    })
                                }
                            </div>
                            {
                                !state.isLoading && <div>Load more</div>
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
    imageUrl: string,
    authors: string[],
    category: string
}
export const Book: React.FC<BookPropsType> = React.memo((props) => {
    return (
        <div className={styles.book}>
            <img src={props.imageUrl} alt={'bookPic'}/>
            <h3>{props.title}</h3>
            <div>
                <span className={styles.authors}>{props.authors}</span>
            </div>
            <div>
                <span className={styles.category}>{props.category}</span>
            </div>
        </div>
    )
})