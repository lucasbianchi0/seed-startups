import React from 'react';
import { useNavigate } from 'react-router-dom';

const BtnAtras: React.FC = () => {
  const history = useNavigate();

  const handleGoBack = (): void => {
    history(-1)
  };

  return (
    <button onClick={handleGoBack}>
      Volver
    </button>
  );
};

export default BtnAtras;
