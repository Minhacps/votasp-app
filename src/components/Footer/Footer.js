import React from 'react';
import './Footer.css';
import './bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col contato d-none d-lg-block col-lg-3 ">
            <h4 className="bold upper">Fale Conosco</h4>
            <div className="email">
              <a href="mailto:contato@minhacampinas.org.br">contato@minhacampinas.org.br</a>
            </div>
            <div className="tel">
              <a href="tel:01925152252">(19) 2515-2252</a>
            </div>
          </div>
          <div className="ajude d-flex align-items-center justify-content-center justify-content-lg-start flex-lg-column col-sm-12 col-lg-2">
            <h4 className="bold upper">Ajude o projeto</h4>
            <a href="https://benfeitoria.com/votasp" target="_blank" className="btn btn-primary">Contribua!</a>
          </div>
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start col-sm-12 col-lg-7 realizacao" />
          <img src='../../img/logo-minhacampinas.png' alt="Logo Minha Campinas" />
          <img src='../../img/logo-frontcampinas.png' alt="Logo Front End Campinas" />
          <img src='../../img/logo-institutosp.png' alt="Logo do IFSP"/>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
