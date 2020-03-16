// import React, { useState } from 'react'
import React from 'react'
import { Link } from '@reach/router'
import './Nav.css'

const Nav = ({navLinks}) => {
    // const [ navOpen, setNavOpen ] = useState(false)

    return (
        <nav>
            <ul className="topnav">
                {navLinks.map( (link, index) => 
                    <li>
                        <Link 
                            to={link.path}>
                            { link.text }
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav