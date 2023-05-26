import React from 'react'
import imagenBannerxs from '../assets/bannerxs.png' 
import imagenBannerSm from '../assets/bannersm.png' 
// import imagenBannerMd from '../assets/bannermd.png' 
import imagenBannerLg from '../assets/bannerlg.png' 
import imagenBannerXl from '../assets/bannerxl.png'


const Banner = () => {
  return (
    <div className="mt-10 bg-bannerBg">
  <div className="sm:hidden md:hidden lg:hidden block">
    <img className="w-full" src={imagenBannerxs} alt="xs" />
  </div>
  <div className="hidden sm:block md:hidden">
    <img className="w-full" src={imagenBannerSm} alt="sm" />
  </div>
  {/* <div className="hidden md:block lg:hidden">
    <img className="w-full" src={imagenBannerMd} alt="md" />
  </div> */}
  <div className="hidden lg:block xl:hidden">
    <img className="w-full" src={imagenBannerLg} alt="lg" />
  </div>
  <div className="hidden lg:hidden xl:block ">
    <div className='flex justify-center'>
      <img className="w-full max-w-[1200px]" src={imagenBannerXl} alt="xl" />
    </div>
    
  </div>



</div>

  )
}

export default Banner