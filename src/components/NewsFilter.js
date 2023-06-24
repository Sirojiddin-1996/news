import React from 'react'

export default function NewsFilter() {
    return (
        <div className='card shadow-lh mt-4'>
            <div className='card-body'>
                <p className='card-text'>Filter by category</p>
                <div className='btn-group'>
                    <button className='btn btn-outline-dark active'>All</button>
                    <button className='btn btn-danger'>Hot News</button>
                    <button className='btn btn-primary'>Sport News</button>
                    <button className='btn btn-success'>World News</button>
                </div>
            </div>
        </div>
    )
}
