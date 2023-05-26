import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Portada from './layouts/Portada'
import Banner from './layouts/Banner'
import Ventajas from './layouts/Ventajas'
import Banner2 from './layouts/Banner2'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Landing from './pages/Landing';



function App() {


  return (
    <>
      <div className='bg-backgro2und'>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
        </Routes>

        </BrowserRouter>
          
      </div>
    </>
  )
}

export default App
