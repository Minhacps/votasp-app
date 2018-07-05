import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import store from '../redux/store';
import Pergunta from '../components/Pergunta/Pergunta';
import { storePerguntas } from '../redux/modules/perguntas';

import './Questionario.css';

export class RawQuestionario extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    axios.get('https://questions.api.votasp.org.br/')
      .then(response => {
        const perguntas = response.data;
        store.dispatch(storePerguntas(perguntas));
      })
      .catch(error => console.log(error));
  }

  render() {
    const { perguntas } = this.props;

    return (
      <div className="questionario__container">
        {perguntas.length && <Pergunta pergunta={perguntas[0]} />}
      </div>
    );
  }
}

const mapStateToProps = ({ perguntas }) => ({
  perguntas,
});

export default connect(mapStateToProps)(RawQuestionario);
