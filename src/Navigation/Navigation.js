import React from 'react';
import logo from './logo.png';
import './Navigation.css';
export const Navigation = () => {
    return (
        <div className='w'>
            <nav className='navbar'>
                <div className="logo">
                    <p><img src={logo} alt="" /></p>
                </div>
                <ul className='ul'>
                    <li className='li'><a href="/" className='a'>HOME</a></li>
                    <li className='li'><a href="/about" className='a'>ABOUT</a></li>
                    <li className='li'><a href="/contact" className='a'>CONTACT</a></li>
                </ul>
            </nav>
        </div>
    )
}
