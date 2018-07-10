import React, { Component } from 'react';
import Deputado from '../components/Deputado/Deputado';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import './Results.scss';

const results = [{
  nome: 'jfida',
  partido: 'jfidsafjidsa',
  afinidade: 5
}];

class Results extends Component {
  onClickShare(deputado) {
    console.log(deputado);
  }

  onClickPlus(deputado) {
    console.log(deputado);
  }

  renderBotaoVerMais() {
    const { temMaisRegistros } = this.props;

    if(temMaisRegistros) {
      return (
        <div className='barra-ver-mais'>
          <button className='ver-mais'>Ver mais</button>
        </div>
      );
    }
  }

  renderCandidatos() {
    const { candidatos } = this.props;

    return results.map((candidato, index) => (
      <Deputado key={index} {...candidato}
        onClickPlus={() => this.onClickPlus(this, candidato)}
        onClickShare={() => this.onClickShare(this, candidato)}/>
    ));
  }

  render() {
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
        <div>
          <select id='question-list' className='question-list'>
            <option value="">Questões</option>
          </select>
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
            { this.renderCandidatos() }
          </div>

          { this.renderBotaoVerMais() }
        </div>
      </div>
    )
  }
}

Results.defaultProps = {
  candidatos: [],
  temMaisRegistros: true
};

export default Results;
