import {RouteComponentProps, withRouter} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../redux/store";
import {bookPageType, ERROR, OK} from "../../redux/bookReducer";
import {booksAPI} from "../../api/getBookApi";
import {changeNeedToSearch, setBook} from "../../redux/actions";
import preloader from "../../common/preloader.gif";
import {WholeBook} from "./WholeBook";
import styles from "../../App.module.css";
import {ErrorMessage} from "../Books/ErrorMessage/ErrorMessage";

type PathParamsType = {
    bookId: string,
}
const BookSecret: React.FC<RouteComponentProps<PathParamsType>> = React.memo((props) => {
    //initial data
    const bookState = useSelector<stateType, bookPageType>(state => state.book)
    const dispatch = useDispatch()
    //side-effects
    useEffect(() => {
        document.title = props.match.params.bookId
        dispatch(changeNeedToSearch(false))
        setTimeout(() => {
            booksAPI.getBook(props.match.params.bookId)
                .then(data => {
                    dispatch(setBook(data))
                })
        }, 2000)

    }, [dispatch, props.match.params.bookId])


    return (
        <div className={styles.booksWrapper}>
            {
                bookState.id === ERROR ?
                    <ErrorMessage message={bookState.kind}/> :
                    bookState.id === OK || props.match.params.bookId !== bookState.id ?
                        <div className={styles.preloader}>
                            <img src={preloader} alt={'preloader'}/>
                        </div> :
                        //@ts-ignore ____________we are here only if bookState is full
                        <WholeBook {...bookState.volumeInfo}/>
            }
        </div>
    )
})
export const BookContainer = withRouter(BookSecret)