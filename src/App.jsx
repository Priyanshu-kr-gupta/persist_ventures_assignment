import { useState } from 'react'
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Search from "./components/Search"
import Navbar from './components/Navbar'
import Fullarticle from './components/Fullarticle'
import Errorpage from './components/Errorpage'
import Favourite from './components/Favourite'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        <Route path="/Article/:id" element={<Fullarticle/>} />
        <Route path="/err/:error" element={<Errorpage/>} />

      </Routes>
      {/* <p className='text-[red]'>sdgsdf</p> */}

    </>
  )
}

export default App
