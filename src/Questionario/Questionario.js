import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import PageLayout from '../components/PageLayout/PageLayout';
import Pergunta from '../components/Pergunta/Pergunta';
import { saveAnswer } from './QuestionarioService';
import questoes from './questoes'
import store from '../redux/store';
import { INDIFERENTE } from '../constants/respostas';
import { storePerguntas } from '../redux/modules/perguntas';

import './Questionario.css';

export class RawQuestionario extends Component {

  state = {
    currentQuestion: 0,
    isAnswering: false,
  };

  componentDidMount() {
    store.dispatch(storePerguntas(questoes));
  }

  pularQuestao = () => {
    return this.saveAnswer(INDIFERENTE).then(() => {
      this.proximaQuestao();
    });
  };

  goToRanking = () => {
    // TODO: Navegar para pagina de ranking
  };

  responderQuestao = (event) => {
    this.saveAnswer(event.target.value).then(() => {
      this.proximaQuestao();
    });
  };

  saveAnswer = (answerValue) => {
    const { currentQuestion } = this.state;
    const questionId = currentQuestion + 1;
    const answer = {
      [questionId]: answerValue,
    };

    this.setState({
      isAnswering: true,
    });

    return saveAnswer(answer);
  }

  proximaQuestao = () => {
    const { currentQuestion } = this.state;
    const { perguntas } = this.props;

    if (currentQuestion === perguntas.length - 1) {
      return;
    }

    this.setState({
      currentQuestion: currentQuestion + 1,
      isAnswering: false,
    });
  }

  render() {
    const { currentQuestion, isAnswering } = this.state;
    const { perguntas } = this.props;

    return (
      <PageLayout>
        <div className={classnames(
          'questionario__container',
          { 'questionario__container--loading': isAnswering }
        )}>
          {perguntas.length &&
            <Pergunta
              pergunta={perguntas[currentQuestion]}
              responderQuestao={this.responderQuestao}
              isAnswering={isAnswering}
            />
          }

          <div className="questionario__actions-container">
            <button
              onClick={this.pularQuestao}
              className="btn btn-light"
              disabled={isAnswering}
            >
              Pular
            </button>
            <button
              onClick={this.goToRanking}
              className="btn btn-light"
              disabled={isAnswering}
            >
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
