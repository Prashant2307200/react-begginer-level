import { useState } from 'react'
import './App.css'
import Heading from './comp/Heading.jsx'
import ToDoList from './comp/ToDoList.jsx'

function App() {
  return (
    <div className='App'>
      <Heading/>
      <ToDoList/>
    </div>
  )
}

export default App
