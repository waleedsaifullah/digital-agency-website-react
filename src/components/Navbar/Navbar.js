import React from 'react'

import './Navbar.css'

import {FaDigitalOcean} from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><FaDigitalOcean/>DigiTize</span></h1>
                <ul className='nav-menu'>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Pages</a></li>
                    <li><a>Services</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <button className='sign-up'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar