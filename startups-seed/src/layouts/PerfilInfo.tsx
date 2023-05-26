import React from 'react'
import IconoPerfil from '../assets/perfilLogo.png'
import Startups from '../db/Startups'
const PerfilInfo = () => {
  return (
    <div>

        <div>

            <div className='flex flex-col items-center  w-[70%] mx-auto my-[30px] mt-[100px]'>
                <img className='w-[20%] mb-[10px] text
                                sm:mb-[14px]
                                lg:w-[10%]' src={IconoPerfil} alt="" />
                <h4 className='font-bold mb-[15px] text-center
                                sm:text-[17px]'>Producelo.io</h4>
                <p className='text-center text-[14px] max-w-[450px]
                            sm:text-[16px]'>Desarrollamos el primer marketplace de locaciones en latinoamerica. Si buscas llevar a cabo una produccion audiovisual tenemos la locacion que estas buscando!</p>
            </div>
            
            <div className='border-t border-gray-300  '>
                <div className=' flex  mx-[10%] my-[10px] gap-[12px] mt-[20px]
                                sm:gap-[16px]
                                
                                lg:mx-[20%]'>
                    <p className='text-primmaryColor text-[14px]
                                sm:text-[16px]'>busca testers</p>
                    <p className='text-primmaryColor text-[14px]
                                sm:text-[16px]'>busca socio tecnico</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PerfilInfo