import React from 'react'
import logo1 from '../assets/logos/logo1.png'
import logo2 from '../assets/logos/logo2.png'
import logo3 from '../assets/logos/logo3.png'
import logo4 from '../assets/logos/logo4.png'
import logo5 from '../assets/logos/logo5.png'

interface Startup{
    logo:string;
    nombre:string;
    descripcionCorta:string;
    descripcionGeneral:string;
    necesidades:Array<string>;
}

const Startups:Array<Startup> = [
    {   
        logo:logo1,
        nombre:'producelo.io',
        descripcionCorta:'Conectamos productores con locaciones increibles',
        descripcionGeneral:'Desarrollamos el primer marketplace de locaciones en latinoamerica. Si buscas llevar a cabo una produccion audiovisual tenemos la locacion que estas buscando!',
        necesidades:['busca testers', 'busca socio tecnico']
    },
    {   
        logo:logo2,
        nombre:'recicloud',
        descripcionCorta:'cargamos en la nube lo que reciclas y te bonificamos compras en supermercados',
        descripcionGeneral:'Desarrollamos el primer marketplace de locaciones en latinoamerica. Si buscas llevar a cabo una produccion audiovisual tenemos la locacion que estas buscando!',
        necesidades:['busca testers']
    },
    {   
        logo:logo3,
        nombre:'muly',
        descripcionCorta:'primer marketplace de muebles ondemand de latinoamerica',
        descripcionGeneral:'Desarrollamos el primer marketplace de locaciones en latinoamerica. Si buscas llevar a cabo una produccion audiovisual tenemos la locacion que estas buscando!',
        necesidades:['busca testers', 'busca socio tecnico']
    },
    {   
        logo:logo4,
        nombre:'recicloud',
        descripcionCorta:'cargamos en la nube lo que reciclas y te bonificamos compras en supermercados',
        descripcionGeneral:'Desarrollamos el primer marketplace de locaciones en latinoamerica. Si buscas llevar a cabo una produccion audiovisual tenemos la locacion que estas buscando!',
        necesidades:[ 'busca socio tecnico']
    },
    {   
        logo:logo5,
        nombre:'muly',
        descripcionCorta:'Conectamos productores con locaciones increibles',
        descripcionGeneral:'Desarrollamos el primer marketplace de locaciones en latinoamerica. Si buscas llevar a cabo una produccion audiovisual tenemos la locacion que estas buscando!',
        necesidades:['busca testers', 'busca socio tecnico']
    },
    {   
        logo:logo3,
        nombre:'mola',
        descripcionCorta:'primer marketplace de muebles ondemand de latinoamerica',
        descripcionGeneral:'Desarrollamos el primer marketplace de locaciones en latinoamerica. Si buscas llevar a cabo una produccion audiovisual tenemos la locacion que estas buscando!',
        necesidades:['busca testers', 'busca socio tecnico']
    },
] 

export default Startups