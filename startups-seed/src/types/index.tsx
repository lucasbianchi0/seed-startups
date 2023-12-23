

export interface Startup {
    _id: string;
    nombre: string;
    descripcionCorta: string;
    descripcionGeneral: string;
    categoria: string;
    busquedas: string[]; // Tipo específico para las búsquedas (string[])
    publicaciones: Publicacion[];
    __v: number;
  }
  
export interface Publicacion {
    descripcionPublicacion: string;
    _id: string;
    fecha: string;
  }

  export interface Category {
    _id: string;
    title: string;
    img: string;
  }

  