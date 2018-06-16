import React, { Component } from 'react';

class Perguntas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      perguntas: [],
    }
  }

  componentDidMount() {
    this._getQuestions();
  }

  _getQuestions() {
    this.setState({
      perguntas: [
        {
            "id": 1,
            "question": "Pergunta 1?"
        },
        {
            "id": 2,
            "question": "O ovo veio antes da galinha?"
        },
        {
            "id": 3,
            "question": "Não é um transformers, mas é um bom filme?"
        },
        {
            "id": 4,
            "question": "Urso é cultura jovem?"
        }
      ]
    });
  }

  render() {
    const { perguntas } = this.state;

    return (
      perguntas.map(pergunta => <Pergunta />)
    );
  }
}

export default Perguntas;
