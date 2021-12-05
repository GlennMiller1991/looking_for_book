import React, {useEffect} from "react";
import styles from './WholeBook.module.css'
import unknownBook from '../../common/unknownBook.png'
import {useDispatch} from "react-redux";
import {changeNeedToSearch} from "../../redux/actions";

type WholeBookPropsType = {
    [x: string]: any,
}
export const WholeBook: React.FC<WholeBookPropsType> = React.memo((props) => {
    const dispatch = useDispatch()
    const imageLinks = props.imageLinks
    const imageSrc = imageLinks ?
        (
            imageLinks.large && imageLinks.large ||
            imageLinks.medium && imageLinks.medium ||
            imageLinks.small && imageLinks.small ||
            imageLinks.thumbnail && imageLinks.thumbnail ||
            imageLinks.smallThumbnail && imageLinks.smallThumbnail
        ) :
        unknownBook

    //unmount
    useEffect(() => {
        return () => {
            dispatch(changeNeedToSearch(false))
        }
    }, [dispatch])

    return (
        <div className={styles.wholeBook}>
            <div className={styles.image}>
                <img alt={'no pic'}
                     src={imageSrc}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.restInfo}>
                    <div className={styles.categories}>
                        {
                            props.categories
                        }
                    </div>
                    <div className={styles.authors}>
                        {
                            props.authors
                        }
                    </div>
                    <div className={styles.title}>
                        {
                            props.title
                        }
                    </div>
                </div>
                <div className={styles.description}>
                    {
                        props.description
                    }
                </div>
            </div>
        </div>
    )
})