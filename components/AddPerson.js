"use client";

import React, { useState } from 'react';

const AddPerson = ({ addPerson }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(name, number);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl text-updraft-brand-900">Añadir Persona</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className="border p-2 mr-2 text-updraft-brand-900"
        />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Número Favorito"
          className="border p-2 mr-2 text-updraft-brand-900"
        />
        <button type="submit" className="bg-updraft-brand-500 text-white px-4 py-2">
          Añadir
        </button>
      </form>
    </div>
  );
};

export default AddPerson;
