import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logoUrl from '../../img/logo-votasp.svg';
import menuIcon from '../../img/icone-menu.svg';

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

      <nav className="navigation-menu">
        <ul className="navigation-menu__list">
          <li className="navigation-menu__item">
            <Link to="/como-funciona" className="navigation-menu__link">
              Como funciona
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </React.Fragment>
);

export default Header;
