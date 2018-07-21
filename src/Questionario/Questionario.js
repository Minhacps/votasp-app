import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import PageLayout from '../components/PageLayout/PageLayout';
import Pergunta from '../components/Pergunta/Pergunta';
import QuestionsMenu from '../components/QuestionsMenu/QuestionsMenu';
import questoes from './questoes'
import store from '../redux/store';
import { INDIFERENTE } from '../constants/respostas';
import { RESPOSTAS } from '../constants/respostas';
import { saveAnswer } from './QuestionarioService';
import { storePerguntas } from '../redux/modules/perguntas';
import { storeQuestionario } from '../redux/modules/questionario';

import './Questionario.css';

export class RawQuestionario extends Component {

  state = {
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
    const { questionario } = this.props;
    const questionId = questionario.currentQuestion + 1;
    const answer = {
      [questionId]: answerValue,
    };

    this.setState({
      isAnswering: true,
    });

    return saveAnswer(answer);
  }

  proximaQuestao = () => {
    const { perguntas, questionario } = this.props;

    if (questionario.currentQuestion === perguntas.length - 1) {
      return;
    }
    store.dispatch(storeQuestionario({
      currentQuestion: questionario.currentQuestion + 1
    }));

    this.setState({
      isAnswering: false,
    });
  };

  goToRanking = () => {
    // TODO: Navegar para pagina de ranking
  };

  render() {
    const { isAnswering } = this.state;
    const { perguntas, questionario } = this.props;
    const { currentQuestion } = questionario;

    return (
      <PageLayout>
        <QuestionsMenu
          answersArray={RESPOSTAS}
          questionsArray={questoes}
          currentQuestion={currentQuestion}
        />
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

const mapStateToProps = ({ perguntas, questionario }) => ({
  perguntas,
  questionario,
});

export default connect(mapStateToProps)(RawQuestionario);
