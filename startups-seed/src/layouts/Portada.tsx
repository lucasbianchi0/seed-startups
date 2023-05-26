import React from 'react'
import iconoFire from '../assets/iconoFire.png'
import { Link } from 'react-router-dom'

const Portada = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center '>
            <h2 className='text-[3.125rem]  font-extrabold text-center mt-16 mb-7 w-[19.9375rem]
                          sm:text-[4.375rem] sm:w-full sm:max-w-[31.25rem] 
                          lg:text-[5rem]  lg:max-w-[31.25rem] lg:mt-10
            '>Somos el ecosistema de <span className='text-primmaryColor'>Startups seed</span>  </h2>
            <p className='w-[19.9375rem] font-light text-center text-[1.375rem] tracking-wide p-15
                          sm:w-[31.25rem] sm:text-[1.625rem]
                          lg:w-[37.6875rem] lg:text-[1.875rem]'
            >Conectamos a Startups en etapas tempranas con early adopters, testers, advisors y angels</p>
            <button className='flex justify-center items-center bg-primmaryColor w-[9.6875rem] h-[42px] mt-9 rounded-full text-white drop-shadow
                              sm:w-[10.625rem]
                              lg:w-[14.3125rem] lg:h-[58px] '>
              <Link to={'/home'}><p className='text-[1rem] text-white
                            sm:text-[1.125rem]
                            lg:text-[1.625rem]'
              >Ver Startups   </p></Link> 
              <img src={iconoFire} alt="icono fuego" />
            </button>
        </div>
    </div>
  )
}

export default Portada