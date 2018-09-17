import React from 'react';

import './Deputado.scss';

const Deputado = ({
  name,
  candidateId,
  number,
  politicalParty,
  matchScore,
  picture = 'http://via.placeholder.com/150x150?text=Foto',
}) => (
    <div className='deputado-list-item'>
      <div className='photo'>
        <div className='photo-container'>
          <img src={picture} alt={`Foto do candidato ${name}`} />
        </div>
      </div>
      <div className='info'>
        <div>
          <a href={`/perfil/${candidateId}`} >
            <span className='candidate-name'>{name}</span>
          </a>
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
