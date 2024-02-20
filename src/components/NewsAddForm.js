import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHttp } from '../hook/useHttp'
import { v4 } from 'uuid'
import { newsCreated } from './NewsList/news_slice'
import { toast } from 'react-toastify';

export default function NewsAddForm(props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const { filtersLoadingStatus, filters } = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const { request } = useHttp()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newNews = { id: v4(), name, description, category }
        request("http://localhost:3001/news", "POST", JSON.stringify(newNews))
            .then(res => console.log('Success'))
            .then(dispatch(newsCreated(newNews)))
            .catch(err => console.log(err))

        setName('')
        setDescription('')
        setCategory('')
        toast.success('ADDED NEWS')

    }

    const renderFilter = (filters, status) => {
        if (status === 'loading') {
            return <option>Loading options..</option>
        } else if (status === 'error') {
            return <option>Error options</option>
        }

        if (filters && filters.length > 0) {
            return filters.map(({ name, label }) => {
                if (name === "all") return;
                return <option key={name} value={name}>{label}</option>
            }, [])
        }
    }

    return (
        <form className='border shadow-lg rounded p-4' onSubmit={onSubmitHandler}>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label fs-4'>Name for new News</label>
                <input
                    type='text'
                    required
                    className='form-control'
                    name='name'
                    id='name'
                    placeholder='What is name of news?'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='text' className='form-label fs-4'>Description for News</label>
                <textarea
                    type='text'
                    required
                    className='form-control'
                    name='text'
                    id='text'
                    placeholder='What is your news about?'
                    style={{ 'height': '120px' }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='category' className='form-label fs-4'>Choose category of news</label>
                <select
                    required
                    className='form-select'
                    id='category'
                    name='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Category of news</option>
                    {renderFilter(filters, filtersLoadingStatus)}
                </select>
            </div>
            <button type='submit' className='btn btn-dark text-light shadow-lg w-100'>Create News</button>
        </form>
    )
}
