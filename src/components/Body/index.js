import React from 'react';
import bannerImage from './banner.png';

export const Body = () => {
  return (
    <div>
      {/* Ajusta el alto de la imagen aquí */}
      <img
        src={bannerImage}
        alt="Banner de la Aplicación"
        style={{ width: '100%', height: '500px' }} // Cambia '200px' al alto deseado
      />
    </div>
    
    
    
  );
}

export default Body;