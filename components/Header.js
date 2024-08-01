import React from 'react';
import Image from 'next/image';
import logo from '../img/clogo.png';

const Header = () => {
  return (
    <header className="bg-updraft-brand-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={100} height={50} className="mr-2" />
      </div>
      <button className="bg-updraft-brand-700 text-white px-4 py-2 rounded hover:bg-white hover:text-updraft-brand-700">
        Conectar
      </button>
    </header>
  );
};

export default Header;
