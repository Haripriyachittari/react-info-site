import React from 'react'
import logo from '../logo.svg';

export default function Navbar() {
  return (
    <nav className='nav'>
       <div className='logo'>
        <img src= { logo }  alt="logo" className='nav-logo'/>
        <h3>ReactFacts</h3>
        </div>
        <ul className='nav-items'>
            <li className='nav-link'>About</li>
            
            <li className='nav-link'>Docs</li>
            <li className='nav-link'>Installation</li>
        </ul>
    </nav>
  )
}
