import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

    const questionsList = questionsMock.map((question) => {
      return (
        <li key={question.questionId}>
          {question.questionId}
        </li>
      );
    })

    return questionsList;
  }

  render() {
    return (
      <div className="questions-menu">
        <div className="questions-header">
          <button
            type="button"
            className="questions-button"
            onClick={this.toggleQuestionsBoard}
          >
            Questões
          </button>
        </div>

        {this.state.isOpen &&
          <div className="questions-board">
            <ul>
              {this.renderListOfQuestions()}
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default QuestionsMenu;
