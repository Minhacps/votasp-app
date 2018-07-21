import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import store from '../redux/store';
import Pergunta from '../components/Pergunta/Pergunta';
import PageLayout from '../components/PageLayout/PageLayout';
import { storePerguntas } from '../redux/modules/perguntas';
import { INDIFERENTE } from '../constants/respostas';
import questoes from './questoes'
import firebase from 'firebase/app';

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
    this.saveAnswer(INDIFERENTE).then(() => {
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
    const userId = firebase.auth().currentUser.uid;
    const { currentQuestion } = this.state;
    const questionId = currentQuestion + 1;
    const answer = {
      [questionId]: answerValue,
    };

    this.setState({
      isAnswering: true,
    });

    return firebase
      .firestore()
      .collection('answers')
      .doc(userId)
      .set(answer, { merge: true });
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
