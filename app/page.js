"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import StoreNumber from '../components/StoreNumber';
import RetrieveNumber from '../components/RetrieveNumber';
import AddPerson from '../components/AddPerson';
import RetrievePersonFavoriteNumber from '../components/RetrievePersonFavoriteNumber';

const Home = () => {
  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const [personFavoriteNumber, setPersonFavoriteNumber] = useState(0);

  const storeNumber = async (number) => {
    // Logic to interact with smart contract and store number
    console.log('Storing number:', number);
  };

  const retrieveNumber = async () => {
    // Logic to interact with smart contract and retrieve number
    setFavoriteNumber(42); // Example
    console.log('Retrieved number:', favoriteNumber);
  };

  const addPerson = async (name, number) => {
    // Logic to interact with smart contract and add a person
    console.log('Adding person:', name, number);
  };

  const retrievePersonFavoriteNumber = async (name) => {
    // Logic to interact with smart contract and retrieve person's favorite number
    setPersonFavoriteNumber(27); // Example
    console.log(`Retrieved ${name}'s favorite number:`, personFavoriteNumber);
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <StoreNumber storeNumber={storeNumber} />
        <RetrieveNumber retrieveNumber={retrieveNumber} />
        <AddPerson addPerson={addPerson} />
        <RetrievePersonFavoriteNumber retrievePersonFavoriteNumber={retrievePersonFavoriteNumber} />
      </main>
    </div>
  );
};

export default Home;
