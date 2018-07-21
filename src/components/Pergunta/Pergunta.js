import React from 'react';
import { RESPOSTAS } from '../../constants/respostas';
import RespostaRadioButton from '../RespostaRadioButton/RespostaRadioButton';

import './Pergunta.css';

const Pergunta = ({ pergunta, responderQuestao, isAnswering, userAnswer }) => {
  return (
    <div className="pergunta__container">
      <p className="pergunta__title">
        <span className="pergunta__number">{pergunta.id}. </span>
        {pergunta.question}
      </p>
      <div className="pergunta__lista-respostas">
        {RESPOSTAS.map((resposta, index) => (
          <RespostaRadioButton
            key={resposta.value}
            id={pergunta.id}
            value={resposta.value}
            label={resposta.title}
            htmlFor={`${pergunta.id}_${index}`}
            onClick={responderQuestao}
            disabled={isAnswering}
            checked={userAnswer == resposta.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Pergunta;
