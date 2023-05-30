import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Startup } from '../types';

const PerfilInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [startups, setStartups] = useState<Startup[]>([]);

  useEffect(() => {
    const fetchStartupData = async () => {
      try {
        const response = await axios.get<Startup[]>(`http://localhost:4050/home/perfil/${id}`);
        console.log(response.data);
        setStartups(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStartupData();
  }, [id]);

  return (
    <div>
      {startups.length === 0 ? (
        <p>cargando...</p>
      ) : (
        <div>
          {startups.map(startup => (
            <div key={startup._id} className='flex flex-col items-center w-[70%] mx-auto my-[30px] mt-[100px]'>
              {/* <img className='w-[20%] mb-[10px] text
                                sm:mb-[14px]
                                lg:w-[10%]' src={IconoPerfil} alt="" /> */}
              <h4 className='font-bold mb-[15px] text-center sm:text-[17px]'>{startup.nombre}</h4>
              <p className='text-center text-[14px] max-w-[450px] sm:text-[16px]'>
                {startup.descripcionGeneral}
              </p>
              <div className='border-t border-gray-300'>
            <div className='flex mx-[10%] my-[10px] gap-[12px] mt-[20px]
                                sm:gap-[16px]
                                
                                lg:mx-[20%]'>
                                {startup.busquedas.map(busqueda => (
                    <p className='text-primmaryColor text-[14px]
                                sm:text-[16px]'>{busqueda}</p>
                  ))}
                </div>
          </div>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default PerfilInfo;
