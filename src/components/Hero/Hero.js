import React from 'react'

import './Hero.css'

import Banner from '../../assets/banner.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='col-2'>
                    <h1>Creative Digital Agency</h1>
                    <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <button className='explore'>Learn More &#8594;</button>
                </div>
                <div className='col-2'>
                    <img src={Banner} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Hero