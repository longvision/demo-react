import React from 'react';

const Map = ({ selectedMap, ...props }) => {
  return (
    <div>
      <img
        alt="Imagem indisponível"
        src={`https://storage.googleapis.com/imagens.clima.tempook.com/${selectedMap}`}
        {...props}
      />
    </div>
  );
};

export default Map;
