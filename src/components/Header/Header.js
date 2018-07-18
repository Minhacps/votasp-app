import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';

import './Header.css';

import logoUrl from '../../img/logo-votasp.svg';

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
          <li className="navigation-menu__item">
            <button onClick={() => firebase.auth().signOut()}>
              Sair
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </React.Fragment>
);

export default Header;
