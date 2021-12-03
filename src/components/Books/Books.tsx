import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../redux/store";
import {booksPageType, changeIsLoadingStatus, renewSearchResults} from "../../redux/searchReducer";
import {booksAPI} from "../../api/getBookApi";
import styles from "../../App.module.css";
import preloader from "../../common/preloader.gif";
import {Book} from "./Book";

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
    console.log(state)
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