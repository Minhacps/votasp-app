import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import get from 'lodash/get';

import PageLayout from '../components/PageLayout/PageLayout';
import Pergunta from '../components/Pergunta/Pergunta';
import QuestionsMenu from '../components/QuestionsMenu/QuestionsMenu';
import questoes from './questoes';
import store from '../redux/store';
import { INDIFERENTE } from '../constants/respostas';
import {
  saveAnswer,
  saveJustification,
  watchAnswers,
  getCurrentUser,
  watchAnswerJustification
} from './QuestionarioService';
import { storeQuestionario } from '../redux/modules/questionario';

import './Questionario.css';

export class RawQuestionario extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    questionario: PropTypes.shape({
      currentQuestion: PropTypes.number
    })
  };

  state = {
    isAnswering: false,
    userAnswers: [],
    userCollection: undefined,
    isCandidate: false,
    currentJustification: '',
    candidateJustifications: []
  };

  componentDidMount() {
    const { question } = this.props.match.params;

    store.dispatch(
      storeQuestionario({
        currentQuestion: parseInt(question - 1)
      })
    );

    getCurrentUser().then(this.saveUser);
  }

  componentDidUpdate(prevProps) {
    const lastQuestion = prevProps.match.params.question;
    const { question } = this.props.match.params;

    if (question !== lastQuestion) {
      store.dispatch(
        storeQuestionario({
          currentQuestion: parseInt(question - 1)
        })
      );

      this.setCurrentJustification();
    }
  }

  setCurrentJustification = () => {
    const { isCandidate, candidateJustifications, currentJustification } = this.state;

    if (!isCandidate) {
      return;
    }

    const { currentQuestion } = this.props.questionario;

    const [storedJustification] = candidateJustifications.filter(
      answer => answer.id == currentQuestion + 1
    );

    const questionJustification = get(storedJustification, 'justification') || '';

    this.setState({
      currentJustification: questionJustification
    });
  };

  saveUser = doc => {
    const user = doc.data();
    const isCandidate = user.role === 'candidate';
    const userCollection = isCandidate ? 'candidate_answers' : 'voter_answers';

    watchAnswers(userCollection).onSnapshot(this.storeAnswers);
    watchAnswerJustification().onSnapshot(this.storeJustification);

    this.setState({
      userCollection,
      isCandidate
    });
  };

  storeAnswers = snapshot => {
    const data = snapshot.data();
    const userAnswers = data
      ? Object.keys(data).map(answerKey => ({
        id: answerKey,
        answer: data[answerKey]
      }))
      : [];

    this.setState({
      userAnswers
    });
  };

  storeJustification = snapshot => {
    const data = snapshot.data();
    const candidateJustifications = data
      ? Object.keys(data).map(answerKey => ({
        id: answerKey,
        justification: data[answerKey]
      }))
      : [];

    this.setState(
      {
        candidateJustifications
      },
      this.setCurrentJustification
    );
  };

  pularQuestao = () => {
    const { isCandidate } = this.state;
    if (isCandidate) return;

    return this.saveAnswer(INDIFERENTE.value).then(() => {
      this.proximaQuestao();
    });
  };

  responderQuestao = event => {
    const { isCandidate } = this.state;

    this.saveAnswer(event.target.value).then(() => {
      if (isCandidate) return;

      this.proximaQuestao();
    });
  };

  saveAnswer = answerValue => {
    const { userCollection, currentJustification } = this.state;
    const { questionario } = this.props;
    const questionId = questionario.currentQuestion + 1;
    const answer = {
      [questionId]: answerValue
    };

    const justification = {
      [questionId]: currentJustification
    };

    if (!this.state.isCandidate) {
      this.setState({
        isAnswering: true
      });
    }

    saveJustification(justification);

    return saveAnswer(answer, userCollection);
  };

  proximaQuestao = () => {
    const { questionario } = this.props;
    const { isCandidate } = this.state;

    if (isCandidate && questionario.currentQuestion === questoes.length - 1) {
      this.props.history.push('/questionario-finalizado');
      return;
    }

    if (questionario.currentQuestion === questoes.length - 1) {
      this.props.history.push('/app/ranking');
      return;
    }

    store.dispatch(
      storeQuestionario({
        currentQuestion: questionario.currentQuestion + 1
      })
    );

    this.props.history.push(`/app/questionario/${questionario.currentQuestion + 2}`);

    this.setState({
      isAnswering: false
    });
  };

  updateJustification = event => {
    this.setState({
      currentJustification: event.target.value
    });
  };

  saveCandidateAnswer = currentAnswer => {
    if (!currentAnswer) {
      return;
    }

    this.setState({
      isAnswering: true
    });

    this.saveAnswer(currentAnswer.answer).then(() => {
      this.proximaQuestao();
    });
  };

  render() {
    const { isAnswering, userAnswers, isCandidate, currentJustification } = this.state;
    const { questionario, history } = this.props;

    const { currentQuestion } = questionario;
    const [currentAnswer] = userAnswers.filter(answer => answer.id == currentQuestion + 1);

    return (
      <PageLayout>
        <div className={'questions_box'}>
          <QuestionsMenu
            userAnswers={userAnswers}
            questionsArray={questoes}
            currentQuestion={currentQuestion}
            history={history}
          />
          <div
            className={classnames('questionario__container', {
              'questionario__container--loading': isAnswering
            })}
          >
            {isCandidate && (
              <p className="questionario__aviso-candidato">
                Você como candidato(a) precisa responder as 40 perguntas para se tornar apto(a) ao
                match.
              </p>
            )}

            {questoes.length && (
              <Pergunta
                pergunta={questoes[currentQuestion]}
                responderQuestao={this.responderQuestao}
                isAnswering={isAnswering}
                userAnswer={currentAnswer ? currentAnswer.answer : undefined}
              />
            )}

            {isCandidate && (
              <div className="justification-field field-wrapper">
                <label htmlFor="justification">
                  Justificativa <small>(opcional)</small>
                </label>
                <textarea
                  value={currentJustification}
                  onChange={this.updateJustification}
                  className="input"
                  name="justification"
                  id="justification"
                  maxLength={500}
                />
              </div>
            )}

            <div className="questionario__actions-container">
              {!isCandidate && (
                <button
                  onClick={this.pularQuestao}
                  className="btn btn-light"
                  disabled={isAnswering}
                >
                  Pular
                </button>
              )}

              {!isCandidate && (
                <Link
                  to="/app/ranking"
                  className="btn btn-light"
                  disabled={isAnswering || userAnswers.length < 20}
                >
                  Calcular afinidade
                </Link>
              )}

              {isCandidate && (
                <button
                  onClick={() => this.saveCandidateAnswer(currentAnswer)}
                  className="btn btn-primary"
                  disabled={isAnswering}
                >
                  Responder
                </button>
              )}
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
}

const mapStateToProps = ({ questionario }) => ({
  questionario
});

export default connect(mapStateToProps)(RawQuestionario);
