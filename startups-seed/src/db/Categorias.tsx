import React from 'react'
import robotica from '../assets/cat-iconos/roboticaCat.png'
import moviles from '../assets/cat-iconos/moviles.png'
import ecommerce from '../assets/cat-iconos/ecom.png'
import delivery from '../assets/cat-iconos/delivery.png'
import medical from '../assets/cat-iconos/med.png'
import fintech from '../assets/cat-iconos/fintech.png'

interface Categoria {
    img: string;
    titulo:string;
    bgColor:string;
}

const Categorias: Array<Categoria> = [
    {
        img:robotica,
        titulo:'Robotica',
        bgColor:'#4866FF'
    },
    {
        img:moviles,
        titulo:'Apps moviles',
        bgColor:'#4866FF'
        // bgColor:'#8A9CFB'
    },
    {
        img:ecommerce,
        titulo:'Ecommerce',
        bgColor:'#4866FF'
        // bgColor:'#CDD5FF'
    },
    {
        img:delivery,
        titulo:'Delivery',
        bgColor:'#A3ACDD'
    },
    {
        img:medical,
        titulo:'Medical',
        bgColor:'#ACB9FF'
    },
    {
        img:fintech,
        titulo:'Fintech',
        bgColor:'#8A9CFB'
    },
    {
        img:fintech,
        titulo:'Fintech',
        bgColor:'#4F63CC'
    },

]

export default Categorias