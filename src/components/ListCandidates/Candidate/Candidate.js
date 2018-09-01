import React from 'react';
import './Candidate.scss';

const candidate = ({
  name,
  number,
  politicalParty,
  picture = 'http://via.placeholder.com/150x150?text=Foto',
  status,
  level,
}) => (
    <div className='deputado-list-item'>
      <div className='photo'>
        <img src={picture} alt={`Foto do candidato ${name}`} />
      </div>
      <div className='info'>
        <div>
          <span className='candidate-name'>{name}</span>
          <span className='candidate-number'>{number}</span>
          {status === "Cadastro Finalizado"
            ? <span className='candidate-status bold green'>{status}</span>
            : <span className='candidate-status bold red'>{status}</span>
          }
        </div>

        <div>
          <span className='partido-name'>{politicalParty}</span>
        </div>
      </div>
    </div>
  )

export default candidate;
