import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../redux/store';
import Pergunta from '../components/Pergunta/Pergunta';
import PageLayout from '../components/PageLayout/PageLayout';
import { storePerguntas } from '../redux/modules/perguntas';
import questoes from './questoes'

import './Questionario.css';

export class RawQuestionario extends Component {

  state = {
    currentQuestion: 0
  };

  componentDidMount() {
    store.dispatch(storePerguntas(questoes));
  }

  pularQuestao = () => {
    const { currentQuestion } = this.state;
    const { perguntas } = this.props;

    if (currentQuestion === perguntas.length - 1) {
      return;
    }

    this.setState({
      currentQuestion: currentQuestion + 1
    });

    // TODO: Chamar api respondendo como INDIFERENTE
  };

  goToRanking = () => {
    // TODO: Navegar para pagina de ranking
  };

  render() {
    const { currentQuestion } = this.state;
    const { perguntas } = this.props;

    return (
      <PageLayout>
        <div className="questionario__container">
          {perguntas.length && <Pergunta pergunta={perguntas[currentQuestion]} />}

          <div className="questionario__actions-container">
            <button onClick={this.pularQuestao} className="btn btn-light">
              Pular
            </button>
            <button onClick={this.goToRanking} disabled className="btn btn-light">
              Calcular afinidade
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }
}

const mapStateToProps = ({ perguntas }) => ({
  perguntas
});

export default connect(mapStateToProps)(RawQuestionario);
