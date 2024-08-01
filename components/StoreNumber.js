"use client";

import React, { useState } from 'react';

const StoreNumber = ({ storeNumber }) => {
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    storeNumber(number);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl text-updraft-brand-900">Almacenar Número Favorito</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border p-2 text-updraft-brand-900"
        />
        <button type="submit" className="bg-updraft-brand-500 text-white px-4 py-2 ml-2">
          Almacenar
        </button>
      </form>
    </div>
  );
};

export default StoreNumber;
