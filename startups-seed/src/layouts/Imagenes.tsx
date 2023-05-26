import React, { useState, ChangeEvent, FormEvent } from 'react';

const Imagenes: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedPhoto(file || null);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Aquí puedes realizar acciones adicionales, como enviar la foto al servidor

    // Reiniciar el estado del formulario
    setSelectedPhoto(null);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
      />
      <button type="submit" disabled={!selectedPhoto}>
        Subir foto
      </button>
    </form>
  );
};

export default Imagenes;
