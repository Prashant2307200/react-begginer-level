import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './elements/Navbar.jsx'
import ProductTab from './elements/ProductTab.jsx'
import Counter from './elements/Counter'
import './App.css';

function App() {
  return (
    <>
      {/* <Navbar navoptions = {
          {
            home : "Home",
            about : "About",
            contact : "Contact"
          }
        }/> */}
      <Navbar navoptions = {['Home','About','Contact']}/>
      <ProductTab/>
      <Counter/>
    </>
  );
}

export default App

// class -> className
// for -> htmlFor
