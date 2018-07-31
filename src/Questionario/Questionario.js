import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLayout from '../components/PageLayout/PageLayout';
import Pergunta from '../components/Pergunta/Pergunta';
import QuestionsMenu from '../components/QuestionsMenu/QuestionsMenu';
import questoes from './questoes'
import store from '../redux/store';
import { INDIFERENTE } from '../constants/respostas';
import { saveAnswer, watchAnswers, getCurrentUser } from './QuestionarioService';
import { storePerguntas } from '../redux/modules/perguntas';
import { storeQuestionario } from '../redux/modules/questionario';

import './Questionario.css';

export class RawQuestionario extends Component {

  state = {
    isAnswering: false,
    userAnswers: [],
    userCollection: undefined,
    isCandidate: false,
  };

  componentDidMount() {
    store.dispatch(storePerguntas(questoes));
    getCurrentUser().then(this.saveUser);
  }

  saveUser = (doc) => {
    const user = doc.data();
    const isCandidate = user.role === 'candidate';
    const userCollection = isCandidate ? 'candidate_answers' : 'voter_answers';

    watchAnswers(userCollection).onSnapshot(this.storeAnswers);

    this.setState({
      userCollection,
      isCandidate,
    });
  }

  storeAnswers = (snapshot) => {
    const data = snapshot.data();
    const userAnswers = data ? Object.keys(data)
      .map(answerKey => ({
        id: answerKey,
        answer: data[answerKey]
      })) : [];

    this.setState({
      userAnswers,
    });
  }

  pularQuestao = () => {
    const { isCandidate } = this.state;
    if (isCandidate) return;

    return this.saveAnswer(INDIFERENTE.value).then(() => {
      this.proximaQuestao();
    });
  };

  responderQuestao = (event) => {
    this.saveAnswer(event.target.value).then(() => {
      this.proximaQuestao();
    });
  };

  saveAnswer = (answerValue) => {
    const { userCollection } = this.state;
    const { questionario } = this.props;
    const questionId = questionario.currentQuestion + 1;
    const answer = {
      [questionId]: answerValue,
    };

    this.setState({
      isAnswering: true,
    });

    return saveAnswer(answer, userCollection);
  }

  proximaQuestao = () => {
    const { perguntas, questionario } = this.props;

    if (questionario.currentQuestion === perguntas.length - 1) {
      this.props.history.push('/calculando-ranking');
      return;
    }

    store.dispatch(storeQuestionario({
      currentQuestion: questionario.currentQuestion + 1
    }));

    this.setState({
      isAnswering: false,
    });
  };

  render() {
    const { isAnswering, userAnswers, isCandidate } = this.state;
    const { perguntas, questionario } = this.props;
    const { currentQuestion } = questionario;
    const [currentAnswer] = userAnswers.filter(answer => answer.id == currentQuestion + 1);

    return (
      <PageLayout>
        <QuestionsMenu
          userAnswers={userAnswers}
          questionsArray={questoes}
          currentQuestion={currentQuestion}
        />
        <div className={classnames(
          'questionario__container',
          { 'questionario__container--loading': isAnswering }
        )}>
          {isCandidate &&
            <p className="questionario__aviso-candidato">
              Você como candidato(a) precisa responder as 40 perguntas para se tornar apto(a) ao match.
          </p>
          }
          {perguntas.length &&
            <Pergunta
              pergunta={perguntas[currentQuestion]}
              responderQuestao={this.responderQuestao}
              isAnswering={isAnswering}
              userAnswer={currentAnswer ? currentAnswer.answer : undefined}
            />
          }

          <div className="questionario__actions-container">
            {!isCandidate &&
              <button
                onClick={this.pularQuestao}
                className="btn btn-light"
                disabled={isAnswering}
              >
                Pular
              </button>
            }

            <Link
              to="/calculando-ranking"
              className="btn btn-light"
              disabled={isAnswering || userAnswers.length < 20}
            >
              Calcular afinidade
            </Link>
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
