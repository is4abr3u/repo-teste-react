import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import Home from './pages/Home'
import Ex01 from './pages/ex-01'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
<Routes>
  <Route path='/' element= {<Home/>} />
  <Route path='/ex01' element= {<Ex01/>} />
</Routes>
    </>
  )
}

export default App
