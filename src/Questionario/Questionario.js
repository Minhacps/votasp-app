import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../redux/store';
import Pergunta from '../components/Pergunta/Pergunta';
import { storePerguntas } from '../redux/modules/perguntas';
import { getQuestions } from '../services/questions';

import './Questionario.css';

export class RawQuestionario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
    };
  };

  componentDidMount() {
    getQuestions()
      .then(response => {
        const perguntas = response.data;
        store.dispatch(storePerguntas(perguntas));
      })
      .catch(error => console.log(error));
  }

  pularQuestao = () => {
    const { currentQuestion } = this.state;
    const { perguntas } = this.props;

    if (currentQuestion === perguntas.length - 1) {
      return;
    }

    this.setState({
      currentQuestion: currentQuestion + 1,
    });

    // TODO: Chamar api respondendo como INDIFERENTE
  }

  goToRanking = () => {
    // TODO: Navegar para pagina de ranking
  }

  render() {
    const { currentQuestion } = this.state;
    const { perguntas } = this.props;

    return (
      <div className="questionario__container">
        {perguntas.length && <Pergunta pergunta={perguntas[currentQuestion]} />}

        <div className="questionario__actions-container">
          <button onClick={this.pularQuestao} className="btn btn-light">Pular</button>
          <button onClick={this.goToRanking} disabled className="btn btn-light">Calcular afinidade</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ perguntas }) => ({
  perguntas,
});

export default connect(mapStateToProps)(RawQuestionario);
