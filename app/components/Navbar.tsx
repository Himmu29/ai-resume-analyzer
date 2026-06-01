import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='navbar' aria-label='Main navigation'>
        <Link to='/' aria-label='EnhancResume Home'>
            <p className='text-2xl font-bold text-gradient'>EnhancResume</p>
        </Link>
        <Link to='/upload' className='primary-button w-fit'>
            Upload Resume
        </Link>
    </nav>
  )
}

export default Navbar
