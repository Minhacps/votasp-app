import React from 'react';
import { Link } from 'react-router-dom';

import './WelcomeMessage.css';

const regions = {
  sp: { name: 'São Paulo', projectName: 'VotaSP' }
};

const WelcomeMessage = ({ regionTag, userName }) => {
  const region = regions[regionTag] || regions['sp'];

  return (
    <section>
      <div className="container welcome-text">
        <h2>
          <strong>Olá, {userName}</strong>
        </h2>
        <p>
          O projeto {region.projectName} nasceu com o objetivo de ajudar a população do estado de
          {` ${region.name}`} a escolher seus candidatos. Através de questões objetivas os eleitores
          podem verificar suas afinidades com os candidatos.
          <br />
          <strong>É muito simples e prático!</strong>
        </p>

        <Link to={`/app/questionario/1`} className="btn btn-primary btn-lg">
          Começar
        </Link>
      </div>
    </section>
  );
};

export default WelcomeMessage;
