import React from 'react'

export default function NewsListItem({ name, description, category }) {
    let elementClassName;
    switch (category) {
        case "Hot News":
            elementClassName = "bg-danger bg-gradient";
            break;
        case "Sport News":
            elementClassName = "bg-primary bg-gradient";
            break;
        case "World News":
            elementClassName = "bg-success bg-gradient";
            break;
        default:
            elementClassName = "bg-info bg-gradient";

    }
    return (
        <li className={`card flex-row shadow-lg text-white my-2 ${elementClassName}`}>
            <div className='card-body'>
                <h3 className='card-title'>{name}</h3>
                <p className='card-text'>{description}</p>
            </div>
            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
                alt='News Img'
                className='img-fluid d-inline w-25'
                style={{ "objactFit": 'cover' }}
            />
            <span className="position-absolute t-0 end-90 translate-middle badge border rounded-pill bg-light">
                <button type='button' className='btn-close' aria-label='Close' ></button>
            </span>
        </li>
    )
}
