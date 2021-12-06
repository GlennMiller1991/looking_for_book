import React, {ChangeEvent, useCallback, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../../redux/store";
import {booksPageType} from "../../../redux/searchReducer";
import {useHistory} from "react-router-dom";
import {changeSearchQuery} from "../../../redux/actions";
import {InputButtonSendData} from "./InputButtonSendData/InputButtonSendData";
import styles from "../../../App.module.css";
import {UserSelect} from "./UserSelect/UserSelect";

export const SearchLogic: React.FC = React.memo(() => {
    console.log('from searchlogic')
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
    const handleRoute = useCallback(() => {
        history.push('/');
    }, [history])

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
    }, [handleRoute, dispatch, searchName, filterName, sortName])
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