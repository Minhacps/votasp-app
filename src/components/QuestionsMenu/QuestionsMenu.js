import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './QuestionsMenu.css';

class QuestionsMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleQuestionsBoard = this.toggleQuestionsBoard.bind(this);
  }

  toggleQuestionsBoard() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  renderListOfQuestions() {
    const questionsMock = Array.from(
      new Array(40),(val,index) => (
        { questionId: index + 1 }
      )
    );

    const QuestionItem = id => (<td className="question-item current-question" key={id}>{id}</td>);

    // const QuestionRow = questionItens => (<tr>{questionItens}</tr>)

    const questionsTable = questionsMock.map((question) => {
      return QuestionItem(question.questionId);
    })

    return questionsTable;
  }

  render() {
    return (
      <div className="questions-menu">
        <button
          type="button"
          className="questions-button"
          onClick={this.toggleQuestionsBoard}
        >
          Questões
          <div className="arrow"/>
        </button>

        {this.state.isOpen &&
          <div className="questions-board">
            <table>
              {this.renderListOfQuestions()}
            </table>
          </div>
        }
      </div>
    )
  }
}

export default QuestionsMenu;
