import React from 'react';

import './Deputado.scss';

const Deputado = ({
  name,
  number,
  politicalParty,
  matchScore,
  picture = 'http://via.placeholder.com/150x150?text=Foto',
}) => (
    <div className='deputado-list-item'>
      <div className='photo'>
        <img src={picture} alt={`Foto do candidato ${name}`} />
      </div>
      <div className='info'>
        <div>
          <span className='candidate-name'>{name}</span>
          <span className='candidate-number'>{number}</span>
        </div>

        <div>
          <span className='partido-name'>{politicalParty}</span>
        </div>

        <div>
          Afinidade: <span className='match-percent'>{matchScore / 100}%</span>
        </div>
      </div>
    </div>
  )

export default Deputado;
