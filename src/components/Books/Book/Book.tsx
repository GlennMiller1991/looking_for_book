import React from "react";
import {useHistory} from "react-router-dom";
import styles from "../../../App.module.css";
import unknownBook from "../../../common/unknownBook.png";
import {setBook} from "../../../redux/actions";
import {useDispatch} from "react-redux";
import {OK} from "../../../redux/bookReducer";

type BookPropsType = {
    id: string,
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
    const dispatch = useDispatch()
    const history = useHistory();
    const handleRoute = () =>{
        dispatch(setBook({id: OK, kind: ''}))
        history.push(`/book/${props.id}`);
    }

    return (
        <div className={styles.book} onClick={handleRoute}>
            <div className={styles.imgWrapper}>
                <div>
                    <img src={props.imageLinks ? props.imageLinks.smallThumbnail : unknownBook}
                         alt={'bookPic'}/>
                </div>
            </div>
            <span className={styles.categories}>{props.categories ? props.categories[0] : ''}</span>
            <div className={styles.titleAndAuthors}>
                <h3 className={styles.bookTitle}>{props.title ? props.title : ''}</h3>
                <div>
                    <span className={styles.authors}>{props.authors ? props.authors : ''}</span>
                </div>
            </div>

        </div>

    )
})