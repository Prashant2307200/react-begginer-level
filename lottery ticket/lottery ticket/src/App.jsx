import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './comp/Lottery'
import {sum} from './comp/helper'

function App() {
  let winCondition = ticket => ticket.every(num => num == ticket[0]);
  return (
    <>
      <Lottery n={2} winCondition={winCondition}/>
    </>
  )
}

export default App
