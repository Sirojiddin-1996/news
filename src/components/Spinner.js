import React from 'react'

export default function Spinner() {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border mx-auto mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
