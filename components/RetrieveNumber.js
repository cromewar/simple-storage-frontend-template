"use client";

import React from 'react';

const RetrieveNumber = ({ retrieveNumber }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-updraft-brand-900">Número Favorito</h2>
      <button 
        onClick={retrieveNumber} 
        className="bg-updraft-brand-500 text-white px-4 py-2 mt-2 rounded">
        Obtener Numero
      </button>
    </div>
  );
};

export default RetrieveNumber;
