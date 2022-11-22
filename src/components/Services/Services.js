import React from 'react'

import './Services.css'
import Card from './Card'
import { dummyData } from './dummyData'

const Services = () => {
    return (
        <div className='services'>
            <p>Our Services</p>
            <h1>We Are Providing Digital Services</h1>
            <div className='card'>
                {dummyData.map((data) => {
                    return (
                        <Card
                            icon={data.icon}
                            title={data.title}
                            text={data.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Services