import React from "react";
import styles from "../../App.module.css";
import unknownBook from "../../common/unknownBook.png";

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
    console.log('from book')
    return (
        <div className={styles.book}>
            <div className={styles.imgWrapper}>
                <div>
                    <img src={props.imageLinks ? props.imageLinks.smallThumbnail : unknownBook} alt={'bookPic'}/>
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