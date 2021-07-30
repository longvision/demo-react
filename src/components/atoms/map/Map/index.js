import React from 'react';

const Map = ({ className, selectedMap }) => {
  return (
    <div>
      <img
        className={className}
        alt=""
        src={`https://storage.googleapis.com/imagens.clima.tempook.com/${selectedMap}`}
      />
    </div>
  );
};

export default Map;
