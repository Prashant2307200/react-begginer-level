import React from 'react'
import { useState } from 'react'

function init(){
    console.log('init was called')
    return Math.floor(Math.random() * 100);
}

export default function Counter() {

    // let [count,setCount] = useState(0);
    // setCount(randValue);

    // let [{blue ,red ,yellow ,green},setColor] = useState({blue : 0,red : 0,yellow : 0,green : 0});
    // setColor( prevColor => {{blue+1,red,yellow,green}});

    // let [color,setColor] = useState({blue : 0,red : 0,yellow : 0,green : 0});
    // setColor( prevColor => {{...prevColor,blue : prevColor.blue+1}});

    // state change -> rerendering

    // let [arr,setArr] = useState(["no Moves"]);
    // setArr( prevArr => [...prevArr ,"blue moves"] );

    // let [count,setCount] = useState(init);
    // setCount( prevVal => prevVal+1 );

    //pass a function
    let [count,setCount] = useState(init);
    function handleOnClick(event) {
        // old val dependent
        setCount( prevVal => prevVal+1 );
        setCount( prevVal => prevVal+1 );
        // alert(`rerender inside ${count}`);
    }
    return (
        <div>
            <button 
                onClick={handleOnClick}
                style={{
                    position : 'absolute',
                    top : '2%',
                    right : '48%'
                }}
            > Count = {count} </button>
        </div>
    )
}
