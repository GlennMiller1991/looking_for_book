import React from "react";
import styles from './WholeBook.module.css'
import unknownBook from '../../common/unknownBook.png'

type WholeBookPropsType = {
    [x: string]: any,
}
export const WholeBook: React.FC<WholeBookPropsType> = React.memo((props) => {
    const imageLinks = props.volumeInfo.imageLinks
    const imageSrc = imageLinks ?
        (
            imageLinks.large && imageLinks.large ||
            imageLinks.medium && imageLinks.medium ||
            imageLinks.small && imageLinks.small ||
            imageLinks.thumbnail && imageLinks.thumbnail ||
            imageLinks.smallThumbnail && imageLinks.smallThumbnail
        ) :
        unknownBook
    console.log(imageSrc)
    return (
        <div className={styles.wholeBook}>
            <div className={styles.image}>
                <img alt={'no pic'}
                     src={imageSrc}
                />
            </div>
            <div className={styles.info}>info</div>
        </div>
    )
})