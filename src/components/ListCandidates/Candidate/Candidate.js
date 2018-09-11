import React from 'react';
import './Candidate.scss';

const candidate = ({
  name,
  number,
  politicalParty,
  picture = 'http://via.placeholder.com/150x150?text=Foto',
  status,
}) => (
    <div className="deputado-list-item">
      <div className="photo">
        <img src={picture} alt={`Foto do candidato ${name}`} />
      </div>
      <div className="info">
        <span className="candidate-name">{name}</span>
        <span className="candidate-number">{number}</span>
        {status === "Cadastro Finalizado"
          ? <span className="candidate-status bold green">{status}</span>
          : <span className="candidate-status bold red">{status}</span>
        }
        <div>
          <span className="partido-name">{politicalParty}</span>
        </div>
      </div>
    </div>
  )

export default candidate;
