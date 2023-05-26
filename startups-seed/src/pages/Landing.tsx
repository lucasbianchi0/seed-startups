import React from 'react'
import Navbar from '../components/Navbar'
import Portada from '../layouts/Portada'
import Banner from '../layouts/Banner'
import Ventajas from '../layouts/Ventajas'
import Banner2 from '../layouts/Banner2'

const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Portada/>
        <Banner/>
        <Ventajas/>
        <Banner2/>
    </div>
  )
}

export default Landing