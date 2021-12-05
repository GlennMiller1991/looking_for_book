import React, {ChangeEvent, useCallback, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {booksPageType} from "../../redux/searchReducer";
import styles from "../../App.module.css";
import {stateType} from "../../redux/store";
import {UserSelect} from "./UserSelect/UserSelect";
import {InputButtonSendData} from "./InputButtonSendData/InputButtonSendData";
import {changeSearchQuery} from "../../redux/actions";
import {useHistory} from "react-router-dom";

export const Hat = React.memo(() => {
    console.log('from hat')
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

export const SearchLogic: React.FC = React.memo(() => {
    console.log('from searchLogic')

    //initial data
    const categories: string[] = useMemo(() => {
        return ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
    }, [])
    const sorts: string[] = useMemo(() => {
        return ['relevance', 'newest']
    }, [])
    const state = useSelector<stateType, booksPageType>(state => state.searchResults)
    const dispatch = useDispatch()
    //variable data
    const [searchName, setSearchName] = useState('')
    const [filterName, setFilterName] = useState(state.filter)
    const [sortName, setSortName] = useState(state.sort)
    const history = useHistory();
    const handleRoute = () => {
        history.push('/');
    }
    //callbacks
    const onSearchFieldChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.currentTarget.value)
    }, [])
    const setSearchParams = useCallback(() => {
        const bookName = searchName.trim()
        if (bookName) {
            dispatch(changeSearchQuery(bookName, filterName, sortName))
            handleRoute()
        }
    }, [handleRoute, dispatch, searchName, filterName, sortName, state])
    return (
        <React.Fragment>
            <InputButtonSendData value={searchName}
                                 url={'/'}
                                 onChange={onSearchFieldChange}
                                 sendData={setSearchParams}/>
            <div className={styles.selectsWrapper}>
                <UserSelect title={'categories'}
                            options={categories}
                            currentValue={filterName}
                            onChange={setFilterName}/>
                <UserSelect title={'sorted by'}
                            options={sorts}
                            currentValue={sortName}
                            onChange={setSortName}/>
            </div>
        </React.Fragment>
    )
})