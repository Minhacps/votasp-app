import React from 'react';
import './Header.scss';

import logoUrl from '../../img/logo-votasp.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logoUrl} alt="Logotipo escrito Vota em branco e SP em amarelo." />
    </header>
  );
};

export default Header;
