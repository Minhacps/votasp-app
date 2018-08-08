import React from 'react';
import { Link } from 'react-router-dom';

import MainMenu from '../MainMenu/MainMenu';

import './Header.css';

import logoUrl from '../../img/MeuVoto_03_AssinaturaMonocromatica.png';

const Header = () => (
  <React.Fragment>
    <header className="header">
      <Link to="/">
        <img
          className="logo"
          src={logoUrl}
          alt="Logotipo escrito Vota em branco e SP em amarelo."
        />
      </Link>

      <MainMenu />
    </header>
  </React.Fragment>
);

export default Header;
