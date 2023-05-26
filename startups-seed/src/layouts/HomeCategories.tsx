import React from 'react'
import roboticaIcono from '../assets/cat-iconos/roboticaCat.png'
import Categorias from '../db/Categorias'

const HomeCategories = () => {
  return (
     
    <div >
      <div className='mt-[40px]
                    sm:mt-[46px]
                    lg:mt-[50px]'>
        <h3 className='text-[22px] font-bold mb-[15px]
                    sm:text-[26px]
                    lg:text-[30px]'>Categorias</h3>
        <p className='text-[16px] my-[10px]
                    sm:text-[20px] sm:my-[18px]
                    lg:text-[22px] lg:my-[30px]'>Explora categorias de startups innovadoras</p>

        <div className="flex no-scrollbar  overflow-x-auto 
                        lg:flex-wrap">
          <div className='flex flex-nowrap my-[15px] gap-[8px]
                         sm:gap-[16px]
                          lg:my-[10px] lg:flex-wrap 
                            '>
            {Categorias.map(categoria=>{
              return(
                <div key={categoria.titulo} className={`w-[90px] h-[90px] bg-[${categoria.bgColor}] rounded-[15px] flex flex-col justify-center items-center 
                           sm:w-[100px] sm:h-[100px] sm:rounded-[20px]
                            lg:w-[130px] lg:h-[110px]  lg:mb-[20px]`}>
              <img className='w-[60%]' src={categoria.img} alt="" />
              <p className='text-[12px] font-semibold text-[#505050] text-[#ffffff]
                            sm:text-[14px]
                          lg:text-[16px]'>{categoria.titulo}</p>
            </div>
              )
            })}

            
            


          </div>  
        </div>
      </div>
    </div>
  )
}

export default HomeCategories