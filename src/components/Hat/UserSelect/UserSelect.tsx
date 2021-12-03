import React from "react";
import styles from "../../../App.module.css";

type UserSelectPropsType = {
    title: string,
    options: string[],
    currentValue: string,
    onChange: (value: string) => void,
}
export const UserSelect: React.FC<UserSelectPropsType> = React.memo((props) => {
    console.log('from userSelect')
    return (
        <div className={styles.userSelectWrapper}>
            <div className={styles.userSelectTitle}>{props.title}</div>
            <div className={styles.userSelect}>
                <select value={props.currentValue}
                        onChange={(e) => props.onChange(e.currentTarget.value)}>
                    {
                        props.options.map((option, index) => {
                            return (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
})