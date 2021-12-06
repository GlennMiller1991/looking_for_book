import React from "react";
import styles from "../../../App.module.css";

type ErrorMessagePropsType = {
    message: string,
}
export const ErrorMessage: React.FC<ErrorMessagePropsType> = React.memo((props) => {
    return (
        <div className={styles.errorMessage}>
            <span className={styles.errorText}>
                {
                    props.message
                }. Try again.
            </span>
        </div>
    )
})