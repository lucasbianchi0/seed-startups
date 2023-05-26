import React from 'react'
import HomeCategories from '../layouts/HomeCategories'
import HomeStartups from '../layouts/HomeStartups'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
   <div >
      <Navbar/>
      <div className='mx-[5%] xl:max-w-[1300px] '>
        <HomeCategories/>
        <HomeStartups/>
        
      </div>
   </div>
  )
}

export default Home