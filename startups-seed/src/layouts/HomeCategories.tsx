import React, { useEffect, useState } from 'react'
// import roboticaIcono from '../assets/cat-iconos/roboticaCat.png'
// import Categorias from '../db/Categorias'
import axios from 'axios'
import { Category } from '../types'
import { Link } from 'react-router-dom'

const HomeCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(()=>{
        axios.get<Category[]>('http://localhost:4050/home/categories')
        .then(response=>{
          console.log(response.data)
          setCategories(response.data)
        }).catch(err=>{
          console.log(err)
        })
   

  },[])


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

        {!categories.length ? (<p>cargando..</p>):(
        <div className="flex no-scrollbar  overflow-x-auto 
                        lg:flex-wrap">
          <div className='flex flex-nowrap my-[15px] gap-[8px]
                         sm:gap-[16px]
                          lg:my-[10px] lg:flex-wrap 
                            '>
            {categories.map(categoria=>{
              return(
                <div key={categoria.title} className={`w-[90px] h-[90px] bg-[${categoria.bgColor}] rounded-[15px] flex flex-col justify-center items-center 
                           sm:w-[100px] sm:h-[100px] sm:rounded-[20px]
                            lg:w-[130px] lg:h-[110px]  lg:mb-[20px]`}>
                  <Link to='/'>
                    {/* <img className='w-[60%]' src={categoria.img} alt="" /> */}
                    <p className='text-[12px] font-semibold text-[#505050]
                                sm:text-[14px]
                              lg:text-[16px]'>{categoria.title}</p>
                  </Link>
                  
            </div>
              )
            })}

          </div>  
        </div>
        )}
      </div>
      
    </div>
  )
}

export default HomeCategories