import React, { useEffect } from 'react'
import { useHttp } from '../hook/useHttp'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from './Spinner'
import Error from './Error'
import { fetchFilter, activeFilterChanged } from '../redux/actions'
import classname from 'classname'

export default function NewsFilter() {
    const { filters, filtersLoadingStatus, activeFilter } = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const { request } = useHttp()

    useEffect(() => {
        dispatch(fetchFilter(request))

    }, [])

    if (filtersLoadingStatus === 'loading') {
        return <Spinner />
    } else if (filtersLoadingStatus === 'error') {
        return <Error />
    }

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return <h5 className='tect-center mt-5'>Filtered does't found</h5>


        }
        return arr.map(({ name, className, label }) => {
            const btnClasses = classname("btn", className, { "active": name === activeFilter })
            return <button key={name} id={name} className={btnClasses} onClick={() => dispatch(activeFilterChanged(name))} >{label}</button>

        });

    }


    const element = renderFilters(filters)

    return (
        <div className='card shadow-lg rounded p-2 mt-2'>
            <div className='card-body'>
                <h4 className='card-text'>Filter by category</h4>
                <div className='btn-group'>
                    {element}
                </div>
            </div>
        </div>
    )
}
