import icono1 from '../assets/ventajasIconos/icono1.png'
import icono2 from '../assets/ventajasIconos/icono2.png'
import icono3 from '../assets/ventajasIconos/icono3.png'
import icono4 from '../assets/ventajasIconos/icono4.png'

interface CardData {
    titulo: string;
    descripcion: string;
    img: string;
  }



const CardsData: Array<CardData> = [
    {
        titulo:'Consigue Early adopters',
        descripcion:'Si todavia no lanzaste o estas arrancando publica tu startup que muchos de nuestros usuarios estan interesados en nuevas soluciones',
        img:icono1
    },
    {
        titulo:'Testea  tu solucion',
        descripcion:'Consigue testers para probar tu solucion o un nuevo feature, componente de diseño o lo que necesites!',
        img:icono2
    },
    {
        titulo:'Consigue inversion',
        descripcion:'Activa el icono de “buscamos inversion” y aparece con prioridad en nuestros usuarios inversores',
        img:icono3
    },
    {
        titulo:'Consigue equipo',
        descripcion:'Activa el icono de “buscamos crecer el equipo” que muchos de nuestros usuarios buscan trabajar en startups o consigue socios que te ayuden a ir a la siguiente etapa!',
        img:icono4
    }
]


  

export default CardsData