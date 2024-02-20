import React from 'react'

export default function NavBar() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 pb-3 mb-4 border-bottom">
            <div className='d-flex flex-md-row w-30'>
                <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none mr-3 pr-5">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Euronews_logo_%281997-1998%29.svg" width="50" height="42" className="me-2" viewBox="0 0 118 94" role="img" />
                    <span className="fs-4">EuroNews</span>
                </a>

            </div>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <a className="me-3 py-2 link-body-emphasis text-decoration-none">Menu</a>

            </nav>
        </div>
    )
}
