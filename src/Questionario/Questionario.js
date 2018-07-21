import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../redux/store';
import Pergunta from '../components/Pergunta/Pergunta';
import PageLayout from '../components/PageLayout/PageLayout';
import QuestionsMenu from '../components/QuestionsMenu/QuestionsMenu';
import { storePerguntas } from '../redux/modules/perguntas';
import { storeQuestionario } from '../redux/modules/questionario';
import { RESPOSTAS } from '../constants/respostas';
import questoes from './questoes'

import './Questionario.css';

export class RawQuestionario extends Component {
  componentDidMount() {
    store.dispatch(storePerguntas(questoes));
  }

  pularQuestao = () => {
    const { perguntas, questionario } = this.props;

    if (questionario.currentQuestion === perguntas.length - 1) {
      return;
    }

    store.dispatch(storeQuestionario({
      currentQuestion: questionario.currentQuestion + 1
    }));

    // TODO: Chamar api respondendo como INDIFERENTE
  };

  goToRanking = () => {
    // TODO: Navegar para pagina de ranking
  };

  render() {
    const { perguntas, questionario } = this.props;

    return (
      <PageLayout>
        <QuestionsMenu answersArray={RESPOSTAS} questionsArray={questoes} />
        <div className="questionario__container">
          {perguntas.length && <Pergunta pergunta={perguntas[questionario.currentQuestion]} />}

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

const mapStateToProps = ({ perguntas, questionario }) => ({
  perguntas,
  questionario,
});

export default connect(mapStateToProps)(RawQuestionario);
