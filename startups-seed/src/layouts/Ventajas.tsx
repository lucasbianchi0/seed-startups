import React from 'react'
import icono1 from '../assets/ventajasIconos/icono1.png'
import icono2 from '../assets/ventajasIconos/icono2.png'
import icono3 from '../assets/ventajasIconos/icono3.png'
import icono4 from '../assets/ventajasIconos/icono4.png'
import CardsData from '../data/CardsData'

const Ventajas = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16 
                    lg:flex-row lg:flex-wrap lg:justify-between lg:mx-[10%]
                    xl:justify-around xl:max-w-[1200px] xl:mx-auto'>
          {CardsData.map(card=>{
            return(
              <div key={card.titulo} className='flex flex-col items-center w-[18.75rem]  mb-[60px]
                        lg:w-[360px] lg:mx-[20px] lg:mb-[120px]
                        xl:mx-[60px]'>
            <img src={card.img} alt="" />
            <h3 className='text-[1.375rem] text-center font-extrabold mb-[1.25rem] mt-[1.6875rem]
                        sm:text-[1.5rem]
                        lg:text-[28px]'
            >{card.titulo}</h3>
            <p className='text-[1.125rem] text-center font-normal
                        sm:text-[1.25rem]
                        lg:text-[1.5rem]'>
            {card.descripcion}</p>
        </div>


            )
          })}
                        
        
      

        

        

        


        

        
        
    </div>
  )
}

export default Ventajas