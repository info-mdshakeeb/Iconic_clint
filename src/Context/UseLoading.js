import React, { createContext, useContext, useReducer } from 'react';
import { initialState, loadingReducer } from '../state/LoadingReducer/loadingReducer';

const Loading = createContext();

const UseLoading = ({ children }) => {
    const [state, dispatch] = useReducer(loadingReducer, initialState)

    const info = { state, dispatch }

    return (
        <Loading.Provider value={info}>
            {children}
        </Loading.Provider>
    );
};

export const useLoading = () => {
    const loading = useContext(Loading)
    return loading
}

export default UseLoading;