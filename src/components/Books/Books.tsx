import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../redux/store";
import {booksPageType} from "../../redux/searchReducer";
import styles from "../../App.module.css";
import {Book} from "./Book/Book";
import {booksType} from "../../redux/booksReducer";
import {getBooks} from "../../redux/thunks";
import {LoadingOrLoadMore} from "./LoadingOrLoadMore/LoadingOrLoadMore";
import {ErrorMessage} from "./ErrorMessage/ErrorMessage";

export const Books = React.memo(() => {
    //data
    const booksState = useSelector<stateType, booksType>(state => state.books)
    const searchState = useSelector<stateType, booksPageType>(state => state.searchResults)
    const dispatch = useDispatch()
    const onClickHandler = useCallback(() => {
        dispatch(getBooks(
            searchState.queryString,
            searchState.pageSize,
            booksState.books.length,
            searchState.sort,
            searchState.filter,
            booksState.totalCount,
        ))
    }, [dispatch, searchState, booksState.books.length, booksState.totalCount])

    //useEffect
    useEffect(() => {
        if (booksState.needToSearch && searchState.queryString) {
            dispatch(getBooks(
                searchState.queryString,
                searchState.pageSize,
                0,
                searchState.sort,
                searchState.filter
            ))
        }
    }, [searchState, booksState.needToSearch, dispatch])
    return (
        <div className={styles.booksWrapper}>
            {
                booksState.totalCount > 0 &&
                <React.Fragment>
                        <h2 className={styles.pagesCount}>Found {booksState.totalCount} results</h2>
                        <div className={styles.booksContainer}>
                            {
                                booksState.books.map((book, index) => {
                                    return (
                                        <Book key={index}
                                              id={book.id}
                                              {...book.volumeInfo}/>
                                    )
                                })
                            }
                        </div>
                </React.Fragment>
            }
            {
                <LoadingOrLoadMore isLoading={booksState.isLoading}
                                   totalCount={booksState.totalCount}
                                   wasRendered={booksState.books.length}
                                   onClickHandler={onClickHandler}
                />
            }
            {
                booksState.error &&
                <ErrorMessage message={booksState.error}/>
            }
        </div>
    )
})

