import React from 'react'
import iconoPerfil from '../assets/perfilLogo.png'
const PerfilPubli = () => {
  return (
    <div className='mx-[5%] flex flex-col items-center '>
        <h5 className='font-bold text-[17px] mt-[30px]'>Publicaciones</h5>
        <div className='mx-[2%]
                        sm:mx-[10%]
                        lg:mx-[20%]'>
            <div className='drop-shadow py-[15px] px-[10px] my-[40px] bg-white'>
                <div className='flex items-center gap-[10px] mb-[15px]'>
                    <img className='w-[8%]' src={iconoPerfil} alt="" />
                    <h6 className='font-bold'>Producelo.io</h6>
                </div>
                <p className='text-[14px]'>Mi socio y yo llevamos 5 años trabajando como productores para producciones locales y del exterior, y siempre nos resulto complicado conseguir lugares para producir ya Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nam consectetur laudantium culpa vitae magni nostrum! Esse, inventore dolore, labore ratione, recusandae asperiores sint vero facilis velit ipsa sit aperiam deserunt! Rem adipisci sit autem? Molestias, ratione architecto. Laborum minima mollitia eveniet consequatur quasi repudiandae! Quis eveniet consequuntur dolores obcaecati quisquam! Odio debitis asperiores atque ea odit obcaecati, unde maxime ratione ipsa, nesciunt quisquam rem cum quas architecto minima repellat aspernatur veniam omnis? Ducimus eos cumque dignissimos quibusdam ipsa unde consequuntur aliquam eum architecto laboriosam, optio possimus assumenda iusto. Iste delectus obcaecati, sint esse earum officia ipsa culpa dolor dolorum?...</p>
            </div>
        {/* desde aca cortar */}
        <div className='drop-shadow py-[15px] px-[10px] my-[40px] bg-white'>
                <div className='flex items-center gap-[10px] mb-[15px]'>
                    <img className='w-[8%]' src={iconoPerfil} alt="" />
                    <h6 className='font-bold'>Producelo.io</h6>
                </div>
                <p className='text-[14px]'>Mi socio y yo llevamos 5 años trabajando como productores para producciones locales y del exterior, y siempre nos resulto complicado conseguir lugares para producir ya Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint, exercitationem, expedita suscipit sed delectus libero, molestiae ab earum consequuntur nostrum itaque iure pariatur. Delectus quam dolore consequatur ratione. Assumenda neque maiores atque voluptatum molestias. Reiciendis numquam aut error iusto ipsum fuga sunt magnam ullam ducimus deserunt temporibus molestiae explicabo accusantium sequi suscipit dolore necessitatibus repellat aliquam consectetur, ad obcaecati rem libero, velit maxime? Tempora, totam vitae? Deserunt, magnam tempore. ...</p>
            </div>
            <div className='drop-shadow py-[15px] px-[10px] my-[40px] bg-white'>
                <div className='flex items-center gap-[10px] mb-[15px]'>
                    <img className='w-[8%]' src={iconoPerfil} alt="" />
                    <h6 className='font-bold'>Producelo.io</h6>
                </div>
                <p className='text-[14px]'>Mi socio y yo llevamos 5 años trabajando como productores para producciones locales y del exterior, y siempre nos resulto complicado conseguir lugares para producir ya ...</p>
            </div>
        
        </div>
    </div>
  )
}

export default PerfilPubli