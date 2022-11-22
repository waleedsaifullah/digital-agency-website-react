import React from 'react'

import './Card.css'

const Card = ({icon, title, text}) => {
    return (
        <div className='card'>
            <div className='container'>
                <img src={icon} alt=''/>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card