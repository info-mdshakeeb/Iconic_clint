import React, { createContext, useContext, useEffect, useState } from 'react';
import { getProductsScroll } from '../../Api/api';

const pagination = createContext();

const UsePagination = ({ children }) => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState(null);
    const [searchData, setSearchData] = useState([]);
    const [products, setProducts] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);
    const [page, setPage] = useState(2)
    const [hasMore, setHasMore] = useState(true)

    const fetchData = async () => {
        setPage(pre => pre + 1)
        const data = await getProductsScroll(page, 15)
        if (data.length === 0) {
            console.log('no more data');
            setHasMore(false)
            return
        }
        setSearchData(pre => [...pre, ...data])
    };
    useEffect(() => {

        if (search?.length > 0 && products === true) {
            const filterResult = data.filter(u => u?.Names?.toLowerCase().includes(search?.toLowerCase()))
            if (filterResult.length === 0 && search) {
                setHasMore(false); setSearchLoading(true); setPage(2)
            } else if (filterResult.length === 0 && !search) {
                setHasMore(true); setSearchLoading(true); setPage(2)
            } else {
                setSearchLoading(false); setSearchData(filterResult); setHasMore(false);
            }
        } else if (search?.length > 0 && !products) {
            const filterResult = data.filter(u => u?.name?.toLowerCase().includes(search?.toLowerCase()))
            if (filterResult.length === 0) { setSearchLoading(true) }
            setSearchLoading(false)
            setSearchData(filterResult)
        } else {
            if (data.length === 0) {
                setSearchLoading(true)
            }
            setHasMore(true)
            setPage(2)
            setSearchLoading(false)
            setSearchData(data)
        }
    }, [search, data, setData, products, setProducts])

    const value = { data, setData, search, setSearch, searchData, setSearchData, products, setProducts, searchLoading, setSearchLoading, page, setPage, fetchData, hasMore, setHasMore }

    return (
        <pagination.Provider value={value} >
            {children}
        </pagination.Provider>
    );

}

export const usePagination = () => {
    const context = useContext(pagination);
    if (context === undefined) {
        throw new Error('usePagination must be used within a PaginationProvider')
    }
    return context
}

export default UsePagination;