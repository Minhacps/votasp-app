import React from 'react';
import './Footer.css';
import logoifsp from '../../img/logo-institutosp.png';
import logoFrontCampinas from '../../img/logo-frontcampinas.png';
import logoMinhaCampinas from '../../img/logo-minhacampinas.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contato email tel">
        <h4 className="bold upper">Fale Conosco</h4>
          <a href="mailto:contato@minhacampinas.org.br">contato@minhacampinas.org.br</a><br />
          <a href="tel:01925152252">(19) 2515-2252</a>
      </div>

      <div className="ajude">
        <h4 className="bold upper">Ajude o projeto</h4>
        <a href="https://www.eufaco.minhacampinas.org.br/" target="_blank" rel="noopener noreferrer" className="contribua">Contribua!</a>
      </div>
      
      <div className="realizacao">
        <h4 className="bold upper">Realização</h4>
        <a href="http://www.minhacampinas.org.br"><img src={logoMinhaCampinas} alt="Logo Minha Campinas" />
        </a>
        <img src={logoFrontCampinas} alt="Logo Front End Campinas" />
        <a href="https://cmp.ifsp.edu.br/">
          <img src={logoifsp} alt="Logo do IFSP"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

/*
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-3 contato text-center">
            <h4 className="bold upper">Fale Conosco</h4>
            <div className="email">
              <a href="mailto:contato@minhacampinas.org.br">contato@minhacampinas.org.br</a>
            </div>
            <div className="tel">
              <a href="tel:01925152252">(19) 2515-2252</a>
            </div>
          </div>
          <div className="col-12 col-sm-3 ajude text-center">
            <h4 className="bold upper">Ajude o projeto</h4>
            <a href="https://www.eufaco.minhacampinas.org.br/" target="_blank" rel="noopener noreferrer" className="btn-custom btn-prim text-center">Contribua!</a>
          </div>
          <div className="col-12 col-sm-6 realizacao text-center">
            <a href="http://www.minhacampinas.org.br"><img src={logoMinhaCampinas} className="img-responsive" alt="Logo Minha Campinas" />
            </a>
            <img src={logoFrontCampinas} className="img-responsive" alt="Logo Front End Campinas" />
            <a href="https://cmp.ifsp.edu.br/">
              <img src={logoifsp} className="img-responsive" alt="Logo do IFSP"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
*/
