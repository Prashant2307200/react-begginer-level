import React from 'react'
import './ProductData.css'

export default function ProductData({title,data}) {
    return (
        <div className='ProductData'>
            <h3>{title}</h3>
            <p>{data}</p>
            {/* {title == 'Shoes' ? <p>Discount : 5%</p> : null} */}
            {title == 'Car' && <p>Discount : 10%</p>}
        </div>
    )
}
