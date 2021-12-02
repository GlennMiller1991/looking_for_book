import React, {useState} from 'react';
import API from '../../api/api';
import styles from './Search.module.css'
import {useSelector} from "react-redux";
import {stateType} from "../../redux/store";
import {searchStateType} from "../../redux/searchReducer";



const Search = () => {
    /*const state = useSelector<stateType, searchStateType>(state => state.searchResults)
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
    );*/
    return (
        <div></div>
    )
}
export default Search;

/*
type BookPropsType = {
    book: bookType,
}
export const Book: React.FC<BookPropsType> = (props) => {
    return (
        <div className={styles.movie}>
{/!*            <img src={props.book.volumeInfo?.description}
                 alt={'no poster'} className={styles.poster}/>*!/}
            <div className={styles.rest}>
                {props.book.volumeInfo?.description}
                <hr/>
{/!*                {props.book.Released}
                <hr/>
                {props.book.Plot}
                <hr/>
                {props.book.Actors}
                <hr/>
                {props.book.Awards}
                <hr/>*!/}
            </div>
        </div>
    )
}*/
