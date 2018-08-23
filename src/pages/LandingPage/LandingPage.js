import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PassosComoFunciona from '../../components/ComoFunciona/PassosComoFunciona';

import Banner from '../../img/bannerprincipal.svg';

import './LandingPage.css';

const LandingPage = () => (
  <React.Fragment>
    <Header />
    <div className="landing-page__projeto">
      <section className="banner">
        <img src={Banner} />
        <div className="landing-page__call-to-action">
          <NavLink to="/app" className="btn">
            Quero participar!
        </NavLink>
        </div>
      </section>
      <div className="landing-page__descricao container">
        <h1>Como Funciona</h1>
        <p>
          O projeto VotaSP nasceu com o objetivo de ajudar a população do estado de São Paulo a
          escolher os seus candidatos(as) a Deputado Estadual e Federal com mais consciência com base no
          que defendem em suas campanhas.
        </p>
        <p>
          Através de questões objetivas os eleitores podem verificar sua afinidade com os
          candidatos. <strong>É muito simples e prático!</strong>
        </p>
      </div>
      <div className="como-funciona">
        <PassosComoFunciona />
      </div>
    </div>
    <div className="landing-page__realizacao">
      <div className="landing-page__descricao container">
        <h1>Realização</h1>
        <p>
          O projeto VotaSP foi desenvolvido por um grupo de profissionais independentes que utilizam
          tecnologia para a construção de uma sociedade melhor. A organização Minha Campinas é
          responsável por promovê-lo.
        </p>
        <p>
          O VotaSP também faz parte de um projeto de extensão do Instituto Federal de São Paulo -
          Campus Hortolândia em parceria com a organização Minha Campinas. O professor André L.
          Bordignon é o responsável pelo projeto de extensão.
        </p>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default LandingPage;
