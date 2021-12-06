import React, {useEffect} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import styles from './App.module.css';
import {Books} from "./components/Books/Books";
import {Hat} from "./components/Hat/Hat";
import {BookContainer} from "./components/WholeBook/BookContainer";

function App() {
    useEffect(() => {
        document.title = 'Google Books Api'
    }, [])

    return (
    <HashRouter>
        <div className={styles.app}>
            <Hat/>
            <Switch>
                <Route path={'/'} exact render={() => <Books/>}/>
                <Route path={'/book/:bookId'} render={() => <BookContainer/>}/>
            </Switch>
        </div>
    </HashRouter>
    );
}

export default App;

