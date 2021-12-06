import React from "react";
import styles from "../../../App.module.css";
import preloader from "../../../common/preloader.gif";

type LoadingOrLoadMorePropsType = {
    isLoading: boolean,
    totalCount: number,
    wasRendered: number,
    onClickHandler: () => void,
}
export const LoadingOrLoadMore: React.FC<LoadingOrLoadMorePropsType> = React.memo((props) => {
    return (
        <React.Fragment>
            {
                props.isLoading ?
                    <div className={styles.preloader}>
                        <img src={preloader} alt={'preloader'}/>
                    </div> :
                    props.totalCount > 0 &&
                    props.totalCount > props.wasRendered &&
                    <h3 className={styles.loadMore}
                        onClick={props.onClickHandler}>Load more</h3>
            }
        </React.Fragment>
    )
})