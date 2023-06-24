import React, { useEffect } from 'react'
import { useHttp } from '../hook/useHttp';
import { useSelector, useDispatch } from 'react-redux';
import { newsFetched, newsFetching, newsFetchingError } from '../redux/actions';
import Spinner from './Spinner';
import Error from './Error'
import NewsListItem from './NewsListItem';

export default function NewsList() {
    const { news, newsLoadingStatus } = useSelector(state => state)
    const dispatch = useDispatch()
    const { request } = useHttp();



    useEffect(() => {
        dispatch(newsFetching());
        request("http://localhost:3001/news")
            .then(data => dispatch(newsFetched(data)))
            .catch(() => dispatch(newsFetchingError()));


        // eslint-disable-next-line
    }, [])

    if (newsLoadingStatus === 'loading') {
        return <Spinner />
    } else if (newsLoadingStatus === 'error') {
        return <Error />
    }

    const renderNewsList = (arr) => {
        if (arr.length === 0) {
            return <h3 className='text-center mt5'>News doesn't exists</h3>
        }
        return arr.map(({ id, ...props }) => {
            return <NewsListItem key={id} {...props} />
        })
    }

    const element = renderNewsList(news)

    return (
        <ul>
            {element}
        </ul>
    )
}
