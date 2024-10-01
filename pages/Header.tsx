// components/Header.tsx
import React from 'react';
import DarkModeToggle from './DarkModeToggle'; // Asegúrate de tener bien importado tu toggle

const Header: React.FC = () => {
  return (
    <header className="MainHeader">
      <span>Jose Cebreros</span>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
