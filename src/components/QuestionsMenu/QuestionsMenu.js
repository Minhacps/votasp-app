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
    const questionsArray = Array
    .apply(null, {length: 40})
    .map(Function.call, Number);

    const questionsList = questionsArray.map(function(question) {
      return <li>{question + 1}</li>
    })

    return questionsList;
  }

  render() {
    return (
      <div className="questions-menu">
        <div className="questions-header">
          <button
            type="button"
            onClick={this.toggleQuestionsBoard}
          >
            Questões
          </button>
        </div>

        {this.state.isOpen &&
          <div className="questions-board">
            {this.renderListOfQuestions()}
          </div>
        }
      </div>
    )
  }
}

export default QuestionsMenu;
