import React from 'react';

import './RespostaRadioButton.css';

const RespostaRadioButton = ({ label, value, id, onClick, checked, htmlFor, disabled }) => {
  return (
    <div className="resposta-radio-btn__container">
      <input
        id={htmlFor}
        type="radio"
        name={`resposta-radio-btn__${id}`}
        className="resposta-radio-btn__input"
        value={value}
        onClick={onClick}
        checked={false}
        disabled={disabled}
      />
      <span className="resposta-radio-btn__icon" />
      <label htmlFor={htmlFor} className="resposta-radio-btn__label">{label}</label>
    </div>
  );
};

export default RespostaRadioButton;
