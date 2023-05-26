import React from 'react'
import iconoMenu from '../assets/iconoMenu.png'
import iconoCohete from '../assets/iconoCohete.png'

const Navbar = () => {
  return (
    <div className='bg-white flex justify-between items-center px-8 drop-shadow 
                      sm:py-2 lg:h-[4.375rem]
                      lg:py-0 lg:h-[4.375rem]'>
        <div className='flex items-center'>
            <h1 className='text-[20px] pe-2 font-semibold 
                          sm:text-[28px]
                          lg:text-[1.75rem]
            '>Strive</h1>
            <img className='h-5' src={iconoCohete} alt="icono cohete" />
        </div>
        
        <img className='h-5 sm:h-9 lg:h-4' src={iconoMenu} alt="icono del menu" />
    </div>
  )
}

export default Navbar