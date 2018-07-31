import React from 'react';

const HamburgerMenu = ({ onClick }) => (
  <button className="hamburger-menu" type="button" onClick={onClick} >
    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 22.67 22.82"><title>Hamburguer Menu</title><g><path className="listraHamburguer" d="M20.94,0H1.7A1.71,1.71,0,0,0,0,1.7H0A1.72,1.72,0,0,0,1.7,3.4H21a1.72,1.72,0,0,0,1.7-1.7h0A1.74,1.74,0,0,0,20.94,0Z" /><path className="listraHamburguer" d="M20.94,19.42H1.7A1.72,1.72,0,0,0,0,21.12H0a1.71,1.71,0,0,0,1.7,1.7H21a1.72,1.72,0,0,0,1.7-1.7h0A1.75,1.75,0,0,0,20.94,19.42Z" /><path className="listraHamburguer" d="M20.94,9.73H1.7A1.71,1.71,0,0,0,0,11.43H0a1.71,1.71,0,0,0,1.7,1.69H21a1.72,1.72,0,0,0,1.7-1.69h0A1.74,1.74,0,0,0,20.94,9.73Z" /></g></svg>
  </button>
)

export default HamburgerMenu;
