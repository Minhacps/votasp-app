import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

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
    console.log( this.state.isOpen )
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <nav className={classnames(
        'navigation-menu',
        { 'opened': this.state.isOpen },
      )}>
        <button className="navigation-menu__link navigation-menu__toggle" type="button" onClick={this.toggleMainMenu} >
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 22.67 22.82"><title>Menu Mobile</title><g><path class="listraHamburguer" d="M20.94,0H1.7A1.71,1.71,0,0,0,0,1.7H0A1.72,1.72,0,0,0,1.7,3.4H21a1.72,1.72,0,0,0,1.7-1.7h0A1.74,1.74,0,0,0,20.94,0Z"/><path class="listraHamburguer" d="M20.94,19.42H1.7A1.72,1.72,0,0,0,0,21.12H0a1.71,1.71,0,0,0,1.7,1.7H21a1.72,1.72,0,0,0,1.7-1.7h0A1.75,1.75,0,0,0,20.94,19.42Z"/><path class="listraHamburguer" d="M20.94,9.73H1.7A1.71,1.71,0,0,0,0,11.43H0a1.71,1.71,0,0,0,1.7,1.69H21a1.72,1.72,0,0,0,1.7-1.69h0A1.74,1.74,0,0,0,20.94,9.73Z"/></g></svg>
        </button>
        <ul className="navigation-menu">
          <button className="navigation-menu__link navigation-menu__toggle" type="button" onClick={this.toggleMainMenu} >
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 22.67 22.82"><title>Menu Mobile</title><g><path class="listraHamburguer" d="M20.94,0H1.7A1.71,1.71,0,0,0,0,1.7H0A1.72,1.72,0,0,0,1.7,3.4H21a1.72,1.72,0,0,0,1.7-1.7h0A1.74,1.74,0,0,0,20.94,0Z"/><path class="listraHamburguer" d="M20.94,19.42H1.7A1.72,1.72,0,0,0,0,21.12H0a1.71,1.71,0,0,0,1.7,1.7H21a1.72,1.72,0,0,0,1.7-1.7h0A1.75,1.75,0,0,0,20.94,19.42Z"/><path class="listraHamburguer" d="M20.94,9.73H1.7A1.71,1.71,0,0,0,0,11.43H0a1.71,1.71,0,0,0,1.7,1.69H21a1.72,1.72,0,0,0,1.7-1.69h0A1.74,1.74,0,0,0,20.94,9.73Z"/></g></svg>
          </button>
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
