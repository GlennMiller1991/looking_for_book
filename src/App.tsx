import React, {KeyboardEvent, ChangeEvent, useState, useEffect} from 'react';
import styles from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {changeSearchQuery, renewSearchResults, searchStateType} from "./redux/searchReducer";
import {stateType} from "./redux/store";
import preloader from './common/preloader.gif'
import API from "./api/api";

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
    //data
    const state = useSelector<stateType, searchStateType>(state => state.searchResults)
    const {searchQuery, searchResult, needToRender, ...rest} = state
    const dispatch = useDispatch()

    //useEffect
    useEffect(() => {
        if (searchQuery) {
            API.searchFilmsByTitle(searchQuery)
                .then(searchResult => {
                    dispatch(renewSearchResults(searchResult))
                })
        }
    }, [searchQuery])
    console.log(state.searchResult.items)
    return (
        <div className={styles.booksContainer}>
            {
                searchResult.items.map((book, index) => {
                    return (
                        <div key={index}>
                            {
                                book.volumeInfo.title
                            }
                        </div>
                    )
                })
            }
        </div>
    )
})