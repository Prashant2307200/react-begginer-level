import React from 'react'
import './Navbar.css'

export default function Navbar({navoptions}) {
    return (
        <div className='Navbar'>
            <nav><ul>{navoptions.map( navoption => <li><a href='#'>{navoption}</a></li>)}</ul></nav>
        </div>
    )
}

// { <li><a href="#">{navoptions.home}</a></li> }