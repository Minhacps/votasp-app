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
      isOpen: false
    };

    this.toggleMainMenu = this.toggleMainMenu.bind(this);
  }

  toggleMainMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <nav className={classnames('navigation-menu', { opened: this.state.isOpen })}>
        <HamburgerMenu onClick={this.toggleMainMenu} />
        <ul className="navigation-menu">
          {!firebase.auth().currentUser && (
            <li className="navigation-menu__list">
              <NavLink to="/app" className="navigation-menu__link">
                Quero participar!
              </NavLink>
            </li>
          )}

          {firebase.auth().currentUser && (
            <React.Fragment>
              <li className="navigation-menu__list">
                <NavLink
                  to="/app/questionario/1"
                  activeClassName="active"
                  className="navigation-menu__link"
                >
                  Questões
                </NavLink>
              </li>
              <li className="navigation-menu__list">
                <NavLink
                  to="/como-funciona"
                  activeClassName="active"
                  className="navigation-menu__link"
                >
                  Como funciona
                </NavLink>
              </li>
              <li className="navigation-menu__list">
                <NavLink
                  to="/app/calculando-ranking"
                  activeClassName="active"
                  className="navigation-menu__link"
                >
                  Ver meu ranking
                </NavLink>
              </li>
              <li className="navigation-menu__list">
                <button className="navigation-menu__link" onClick={() => firebase.auth().signOut()}>
                  Sair
                </button>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    );
  }
}

export default MainMenu;
