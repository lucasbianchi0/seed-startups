import React from 'react'
import PerfilInfo from '../layouts/PerfilInfo'
import PerfilPubli from '../layouts/PerfilPubli'
import Imagenes from '../layouts/Imagenes'
import BtnAtras from '../components/BtnAtras'

const Perfil = () => {
  return (
    <div>
        <PerfilInfo/>
        <PerfilPubli/>
        <BtnAtras/>
        <Imagenes/>
    </div>
  )
}

export default Perfil