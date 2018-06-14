import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import some from 'lodash/some';
import { answersMock, questionsMock } from './QuestionsMenuMock';

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
    const QuestionItem = (id, isAnsweredQuestion) => (
      <li
        className={classnames(
          'question-item',
          { 'current-question': false },
          { 'question-answered': isAnsweredQuestion },
        )}
        key={id}
      >
        {id}
      </li>
    );

    const questionsTable = questionsMock.map((question) => {
      const isAnsweredQuestion = some(answersMock, { questionId: question.id });

      return QuestionItem(question.id, isAnsweredQuestion);
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
