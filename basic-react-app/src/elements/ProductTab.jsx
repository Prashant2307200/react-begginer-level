import React from 'react'
import Product from './Product.jsx';
import './ProductTab.css'

export default function ProductTab() {
    const productData = [
        {
            title : 'Shoes' ,
            data :
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas consequuntur ratione,   earum dolorum officiis quae ullam sint repellat laborum nulla',
            link : "https://source.unsplash.com/random/200x200?watch"
        },
        {
            title : 'Bags',
            data : 
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas consequuntur ratione,   earum dolorum officiis quae ullam sint repellat laborum nulla',
            link : "https://source.unsplash.com/random/200x200?car"
        },
        {
            title : 'Car',
            data : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet',
            link : "https://source.unsplash.com/random/200x200?bike"  
        }
    ];
    return (
        <div className='ProductTab'>{productData.map(d => <Product title={d.title} data={d.data} link={d.link}/>)}</div>
    )
}


