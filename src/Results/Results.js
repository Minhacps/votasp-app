import React, { Component } from 'react';
import Deputado from './Deputado';

const candidatos = [{
  deputadoName: 'Bla',
  deputadoNumber: 534,
  partidoName: 'Jfdjsaif',
  matchPercent: 80
}, {
  deputadoName: 'Blar1',
  deputadoNumber: 537,
  partidoName: 'Jfdjsaif',
  matchPercent: 80
}];

class Results extends Component {
  render() {
    const deputados = candidatos.map((c, index) => <Deputado key={index} {...c} />);
    return(
      <div className='container'>
        <div className='header'>
          <h1>Ranking</h1>
          <p>Texto explicativo sobre o ranking, falando que ele e baseado na compatibilidade com as respostas escolhidas comparadas aos candidatos cadastrados.</p>
        </div>
        <div>
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
