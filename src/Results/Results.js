import React, { Component } from 'react';
import Deputado from './Deputado';

const candidatos = [{
  nome: 'Blar1',
  numero: 537,
  partido: 'Jfdjsaif',
  afinidade: 80
}, {
  nome: 'Blar2',
  numero: 537,
  partido: 'Jfdjsaif2',
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
