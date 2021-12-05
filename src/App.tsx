import React, {useEffect} from 'react';
import styles from './App.module.css';
import {Books} from "./components/Books/Books";
import {Hat} from "./components/Hat/Hat";

function App() {
    console.log('from app')

    useEffect(() => {
        document.title = 'Google Books Api'
    }, [])

    return (
        <div className={styles.app}>
            <Hat/>
            <Books/>
        </div>
    );
}

export default App;

