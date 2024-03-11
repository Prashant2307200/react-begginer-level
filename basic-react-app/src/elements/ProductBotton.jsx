import React from 'react'
import './ProductButton.css'

export default function ProductBotton({title}) {
    function handleOnClick(event){
        alert('Product added in cart');
    }
    return (
        <div className='ProductBotton'>
            <button 
                style={{backgroundColor: title == "Car" ? "royalblue" : "#333"}}
                onClick={handleOnClick}
            >Show</button>
        </div>
    )
}
