import React, { Component } from 'react';
import Deputado from '../components/Deputado/Deputado';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import './Results.scss';

const candidatos = [{
  nome: 'Nome do Candidato 1',
  numero: 999,
  partido: 'Nome Partido 1',
  afinidade: 80
}, {
  nome: 'Nome do Candidato 2',
  numero: 999,
  partido: 'Nome Partido 2',
  afinidade: 80
}];

for (let i = 0; i < 1; i++) {
  candidatos.push({
    nome: 'Nome do Candidato ' + i,
    numero: 999,
    partido: 'Nome Partido ' + i,
    afinidade: 80
  });
}

class Results extends Component {
  onClickShare(deputado) {
    console.log(deputado);
  }

  onClickPlus(deputado) {
    console.log(deputado);
  }

  render() {
    const deputados = candidatos.map((c, index) => <Deputado key={index} {...c}
      onClickPlus={this.onClickPlus.bind(this, c)}
      onClickShare={this.onClickShare.bind(this, c)}/>);

    const values = [
      { value: 70, color: '#feb557' },
      { value: 50, color: '#fbdaab' }
    ];

    return(
      <div className='container results'>
        <div className='progress-bar'>
          <h1 className='progress-bar-title'>Progresso das respostas</h1>
          <ProgressBar values={values} />
        </div>
        <div className='description'>
          <h1 className='uppercase'>Ranking</h1>
          <p>Texto explicativo sobre o ranking, falando que ele e baseado na compatibilidade com as respostas escolhidas comparadas aos candidatos cadastrados.</p>
        </div>
        <div className='content'>
          <div className='buttons button-group'>
            <button className='button active uppercase'>Deputado Federal</button>
            <button className='button uppercase'>Deputado Estadual</button>
          </div>

          <div className='deputados'>
            {deputados}
          </div>

          <div className='barra-ver-mais'>
            <button className='ver-mais'>Ver mais</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Results;
