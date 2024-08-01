"use client";

import React, { useState } from 'react';

const RetrievePersonFavoriteNumber = ({ retrievePersonFavoriteNumber }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    retrievePersonFavoriteNumber(name);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl text-updraft-brand-900">Obtener el Número Favorito de una Persona</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className="border p-2 mr-2 text-updraft-brand-900"
        />
        <button type="submit" className="bg-updraft-brand-500 text-white px-4 py-2">
          Obtener
        </button>
      </form>
    </div>
  );
};

export default RetrievePersonFavoriteNumber;
