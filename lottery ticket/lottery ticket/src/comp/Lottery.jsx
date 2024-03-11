import React from 'react'
import { useState } from 'react'
// import './ticket.css'
import Ticket from './Ticket.jsx'
import { genTicket,sum } from './helper.js'

export default function Lottery({ n=3, winCondition }) {
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket); 
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}

// function comp and class comp
// logical / smart comp(state var) and presentational comp / dumb comp
// state lift up
