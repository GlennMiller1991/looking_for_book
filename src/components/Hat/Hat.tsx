import React from "react";
import styles from "../../App.module.css";
import {SearchLogic} from "./SearchLogic/SearchLogic";

export const Hat = React.memo(() => {
    return (
        <div className={styles.hat}>
            <div className={styles.darker}>
                <h1>Search for books</h1>
                <div className={styles.searchWrapper}>
                    <SearchLogic/>
                </div>
            </div>
        </div>
    )
})

