import React, { Component } from 'react';
import Deputado from '../components/Deputado/Deputado';

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

    return(
      <div className='container'>
        <div className='header'>
          <h1>Ranking</h1>
          <p>Texto explicativo sobre o ranking, falando que ele e baseado na compatibilidade com as respostas escolhidas comparadas aos candidatos cadastrados.</p>
        </div>
        <div className='content'>
          <div className='buttons'>
            <button>Deputado Federal</button>
            <button>Deputado Estadual</button>
          </div>

          <div className='deputados'>
            {deputados}
          </div>
        </div>
      </div>
    )
  }
}

export default Results;
