import React from 'react'
import logo from '../assets/cat-iconos/logoxs.png'
import Startups from '../db/Startups'

const HomeStartups = () => {
  return (
    <div className='mt-[20px]
                    sm:mt-[30px]
                    lg:mt-[30px]'>
        <h3 className='text-[22px] font-bold mb-[15px]
                    sm:text-[26px]
                    lg:text-[30px]'>Todas las startups</h3>

     
        <div className='sm:flex sm:justify-between sm:flex-wrap mt-[20px] '>
               {/* estoy aca */}

            {Startups.map(startup=>{
                return(
                    <div className=' flex flex-col  bg-[#F0F0F0] w-full  p-[10px] rounded-[20px] drop-shadow-lg my-[20px]
                            sm:w-[48%] sm:h-[260px] sm:justify-between
                            lg:w-[30%] lg:h-[310px] lg:px-[2%]
                            xl:h-[290px]   '>
                                
                <div className='flex sm:flex-col  '>
                    <div className='mr-[10px] sm:flex sm:justify-center'>
                        <img src={startup.logo} alt="" />
                    </div>
                    <div className='flex flex-col justify-between h-[110px]
                        sm:h-[130px] sm:mt-[20px]
                        
                        xl:h-[140px]'>
                        <h4 className='font-bold text-[16px]
                                    sm:text-[20px] sm:text-center sm:mb-[10px]
                                    lg:text-[20px] lg:mb-[5px]'>{startup.nombre}</h4>
                        <p className='my-[6px] text-[14px] text-[#696969] 
                                    sm:my-[8px] sm:text-[15px] sm:mb-[20px]  sm:text-center
                                    lg:text-[18px]
                                    xl:text-[18px]'>{startup.descripcionCorta}</p>
                        <div className='flex 
                                        sm:justify-around gap-[20px] mt-[10px] p-0'>
                            {startup.necesidades.map(necesidad=>(
                                <p key={necesidad} className='text-[13px] text-primmaryColor
                                sm:text-[14px] sm:text-center
                                lg:text-[18px]'>{necesidad}
                                </p>
                            ))}
                            
                            
                        </div>
                    </div>
                </div>
            </div>

                )
            })}


            

        </div>
    </div>
  )
}

export default HomeStartups