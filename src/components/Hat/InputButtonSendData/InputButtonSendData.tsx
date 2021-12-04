import React, {ChangeEvent, KeyboardEvent} from "react";

type InputButtonSendDataPropsType = {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    sendData: () => void,
}
export const InputButtonSendData: React.FC<InputButtonSendDataPropsType> = React.memo((props) => {
    console.log('from userInput')
    const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            props.sendData()
        }
    }
    const onButtonClick = () => {
        props.sendData()
    }
    return (
        <>
            <input value={props.value} onChange={props.onChange} onKeyPress={onEnterPress}/>
            <button onClick={onButtonClick}>search</button>
        </>
    )
})