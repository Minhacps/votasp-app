import React from 'react';

import './ComoFunciona.css';
import './bootstrap.min.css';

import icone1 from '../../img/icone-01.svg';
import icone2 from '../../img/icone-02.svg';
import icone3 from '../../img/icone-03.svg';
import icone4 from '../../img/icone-04.svg';

export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <figure className="passos passo1">
            <img className="icone" src={icone1} alt="Icone do questionário" />
          </figure>
          <p className="bold">Você responde um questionário de (no mínimo) 21 questões.</p>
        </div>
        <div className="col-6">
          <figure className="passos passo2">
            <img
              className="icone"
              src={icone2}
              alt="Icone do cruzamento das suas respostas com as dos candidatos e candidatas."
            />
          </figure>
          <p>Nós cruzamos as suas respostas com os candidatos e candidatas cadastradas.</p>
        </div>
        <div className="col-6">
          <figure className="passos passo3">
            <img
              className="icone"
              src={icone3}
              alt="Icone 3 dos candidatos com mais afinidade com você."
            />
          </figure>
          <p>Te informamos quem dos candidatos e candidatas pensam mais parecido com você.</p>
        </div>
        <div className="col-6">
          <figure className="passos passo4">
            <img
              className="icone"
              src={icone4}
              alt="Icone 4. Você pode olhar as respostas de todos os candidatos e candidatas."
            />
          </figure>
          <p>Você pode olhar as respostas e perfil de todos eles e elas.</p>
        </div>
      </div>
    </div>
  );
};
