import React from 'react'
import TicketNum from './TicketNum'
import './TicketStyle.css'

export default function Ticket({ ticket }) {
    return (
        <div className='Ticket'>
            <p>Ticket </p>
            {ticket.map((num,idx) => <TicketNum num={num} key={idx}/>)}
        </div>
    )
}
