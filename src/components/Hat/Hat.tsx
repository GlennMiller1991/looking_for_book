import React, {ChangeEvent, useCallback, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {booksPageType, changeSearchQuery} from "../../redux/searchReducer";
import styles from "../../App.module.css";
import {stateType} from "../../redux/store";
import {UserSelect} from "./UserSelect/UserSelect";
import {InputButtonSendData} from "./UserInput/InputButtonSendData";

export const Hat = React.memo(() => {
    console.log('from hat')

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

    //callbacks
    const onSearchFieldChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.currentTarget.value)
    }, [])
    const setSearchParams = useCallback(() => {
        searchName &&
        dispatch(changeSearchQuery(searchName, filterName, sortName))
    }, [dispatch, searchName, filterName, sortName])
    return (
        <div className={styles.hat}>
            <h1>Search for books</h1>
            <div>
                <InputButtonSendData value={searchName} onChange={onSearchFieldChange} sendData={setSearchParams}/>
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
            </div>

        </div>
    )
})
