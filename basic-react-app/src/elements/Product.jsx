import React from 'react'
import ProductImg from './ProductImg.jsx'
import ProductData from './ProductData.jsx'
import ProductBotton from './ProductBotton.jsx'
import './Product.css'

export default function Product({title,data,link}) {
    return (
        <div className='Product'>
            <ProductImg link={link}/>
            <div className='product-content'>
                <ProductData title = {title} data = {data}/>
                <ProductBotton title = {title}></ProductBotton>
            </div>
        </div>
    )
}
