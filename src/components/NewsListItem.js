import React from 'react'

export default function NewsListItem({ name, description, category, onDelete }) {
    let elementClassName;

    switch (category) {
        case 'Hot News':
            elementClassName = 'bg-danger bg-gradient'
            break
        case 'Sport News':
            elementClassName = 'bg-primary bg-gradient'
            break
        case 'World News':
            elementClassName = 'bg-success bg-gradient'
            break
        default:
            elementClassName = 'bg-info bg-gradient';
    }
    return (
        <li className={`card flex-row shadow-lg mb-2 text-white ${elementClassName}`}>

            <div className='card-body'>
                <h3 className='card-title'>{name}</h3>
                <p className='card-text'>{description}</p>
            </div>
            <img
                src='https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                alt='News Img'
                className='img-fluid w-25 d-inline'
                style={{ "objactFit": "cover" }}
            />
            <span className='position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light'>
                <button type='button' className='btn-close' aria-label='Close' onClick={onDelete}></button>
            </span>
        </li>
    )
}
