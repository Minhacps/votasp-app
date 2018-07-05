import React from 'react';
import { RESPOSTAS } from '../../constants/respostas';
import RespostaRadioButton from '../RespostaRadioButton/RespostaRadioButton';

import './Pergunta.css';

const Pergunta = ({ pergunta }) => {
  return (
    <div className="pergunta__container">
      <p className="pergunta__title">
        <span className="pergunta__number">{pergunta.id}. </span>
        {pergunta.question}
      </p>
      <div className="pergunta__lista-respostas">
        {RESPOSTAS.map(resposta => (
          <RespostaRadioButton
            key={resposta.value}
            id={resposta.value}
            value={resposta.value}
            label={resposta.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Pergunta;
