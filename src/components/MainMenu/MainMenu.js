import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import firebase from 'firebase/app';
import classnames from 'classnames';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './MainMenu.css';

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleMainMenu = this.toggleMainMenu.bind(this);
  }

  toggleMainMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <nav className={classnames(
        'navigation-menu',
        { 'opened': this.state.isOpen },
      )}>
        <HamburgerMenu onClick={this.toggleMainMenu} />
        <ul className="navigation-menu">
          <li className="navigation-menu__list">
            <NavLink to="/meu-perfil" activeClassName="active" className="navigation-menu__link">
              Meu perfil
            </NavLink>
          </li>
          <li className="navigation-menu__list">
            <NavLink to="/como-funciona" activeClassName="active" className="navigation-menu__link">
              Como funciona
            </NavLink>
          </li>
          <li className="navigation-menu__list">
            <NavLink to="/questoes" activeClassName="active" className="navigation-menu__link">
              Questões
            </NavLink>
          </li>
          <li className="navigation-menu__list">
            <NavLink to="/ranking" activeClassName="active" className="navigation-menu__link">
              Ver meu ranking
            </NavLink>
          </li>
          <li className="navigation-menu__list">
            <NavLink to="/realizacao" activeClassName="active" className="navigation-menu__link">
              Realização
            </NavLink>
          </li>
          <li className="navigation-menu__list">
            <button className="navigation-menu__link" onClick={() => firebase.auth().signOut()}>
              Sair
            </button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default MainMenu;
