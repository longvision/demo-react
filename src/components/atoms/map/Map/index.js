import React from 'react';

const Map = ({ style, selectedMap }) => {
  return (
    <div>
      <img
        className={style}
        alt="mapa_brasil"
        src={`https://storage.googleapis.com/imagens.clima.tempook.com/${selectedMap}`}
      />
    </div>
  );
};

export default Map;
