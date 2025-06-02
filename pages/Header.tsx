// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle'; // Asegúrate de tener bien importado tu toggle

const Header: React.FC = () => {
  return (
    <header className="MainHeader">
      <Link href="/" className="logo-link">
        <span className="logo-text">Jose Cebreros</span>
      </Link>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
