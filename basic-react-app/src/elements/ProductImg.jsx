import React from 'react'
import './ProductImg.css'

export default function ProductImg({link}) {
    return (
        <div className='ProductImg'>
            <img src={link} alt="" />
        </div>
    )
}
