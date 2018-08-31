import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PassosComoFunciona from '../../components/ComoFunciona/PassosComoFunciona';
import Realizacao from '../../components/Realizacao/Realizacao';

import './LandingPage.css';

const LandingPage = () => (
  <React.Fragment>
    <Header />
    <div className="landing-page__projeto">
      <div className="landing-page__descricao container">
        <h1>O projeto</h1>
        <p>
        O Vota SP é um site que vai ajudar a população do Estado de São Paulo escolher seus candidatos e candidatas a deputado, deputada estadual e federal.
        </p>
        <p>
          Através de questões objetivas os eleitores podem verificar sua afinidade com os
          candidatos e candidatas. <strong>É muito simples e prático!</strong>
        </p>
      </div>
      <div className="como-funciona">
        <PassosComoFunciona />
      </div>
      <div className="landing-page__call-to-action">
        <NavLink to="/app/questionario/1" className="btn btn-primary btn-lg">
          Quero participar!
        </NavLink>
      </div>
    </div>
    <div className="landing-page__realizacao">
      <div className="landing-page__descricao container">
        <Realizacao />
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default LandingPage;
