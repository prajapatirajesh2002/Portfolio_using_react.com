import React from 'react'
import {NavLink} from 'react-router-dom'

const Nabvar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'>

            <li className='navbar-item'>
                <NavLink className="navbar-link" to="/"> About</NavLink>
            </li>

            <li className='navbar-item'>
                <NavLink className="navbar-link" to="/resume"> Resume</NavLink>
            </li>

            <li className='navbar-item'>
                <NavLink className="navbar-link" to="/portfolio"> Projects</NavLink>
            </li>

            <li className='navbar-item'>
                <NavLink className="navbar-link" to="/contact"> Contact</NavLink>
            </li>

        </ul>
    </nav>
  )
}

export default Nabvar
