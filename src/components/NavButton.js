import React from 'react'
import { Link } from 'react-router-dom'

import './NavButton.css'


function NavButton({ children, href }) {
  return (
    <Link to={href}>
      <button className='button'>
        {children}
      </button>
    </Link>
  )
}

export default NavButton
