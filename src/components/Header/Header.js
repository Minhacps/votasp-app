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
        <Link to="/como-funciona" className="navigation-menu__link">
          Como funciona
        </Link>
        <button className="navigation-menu__link" onClick={() => firebase.auth().signOut()}>
          Sair
        </button>
      </nav>
    </header>
  </React.Fragment>
);

export default Header;
