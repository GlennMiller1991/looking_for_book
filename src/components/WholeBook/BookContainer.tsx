import {RouteComponentProps, withRouter} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../redux/store";
import {bookPageType, ERROR, OK} from "../../redux/bookReducer";
import {booksAPI} from "../../api/getBookApi";
import {setBook} from "../../redux/actions";
import {ErrorMessage} from "../Books/Books";
import preloader from "../../common/preloader.gif";
import {WholeBook} from "./WholeBook";

type PathParamsType = {
    bookId: string,
}
const BookSecret: React.FC<RouteComponentProps<PathParamsType>> = React.memo((props) => {
    console.log('from BookWhole')
    //initial data
    const bookState = useSelector<stateType, bookPageType>(state => state.book)
    const dispatch = useDispatch()
    //side-effects
    useEffect(() => {
        document.title = props.match.params.bookId
        setTimeout(() => {
            booksAPI.getBook(props.match.params.bookId)
                .then(data => {
                    dispatch(setBook(data))
                })
        }, 2000)
    }, [dispatch, props.match.params.bookId])
    console.log(bookState)
    return (
        <React.Fragment>
            {
                bookState.id === ERROR ?
                    <ErrorMessage message={bookState.kind}/> :
                    bookState.id === OK ?
                        <img src={preloader} alt={'page is loading'}/> :
                        <WholeBook {...bookState}/>
            }
        </React.Fragment>
    )
})
export const BookContainer = withRouter(BookSecret)