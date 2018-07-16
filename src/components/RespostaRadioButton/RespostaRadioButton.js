import React from 'react';

import './RespostaRadioButton.css';

const RespostaRadioButton = ({ label, value, id, onClick, checked }) => {
  return (
    <div className="resposta-radio-btn__container">
      <input
        id={id}
        type="radio"
        name="resposta-radio-btn"
        className="resposta-radio-btn__input"
        value={value}
        onClick={onClick}
        checked={checked}
      />
      <span className="resposta-radio-btn__icon" />
      <label htmlFor={id} className="resposta-radio-btn__label">{label}</label>
    </div>
  );
};

export default RespostaRadioButton;
