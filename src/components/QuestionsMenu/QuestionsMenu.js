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
    const QuestionItem = (id, isAnsweredQuestion, isCurrentQuestion) => (
      <li
        className={classnames(
          'question-item',
          { 'current-question': isCurrentQuestion },
          { 'question-answered': isAnsweredQuestion },
        )}
        key={id}
      >
        {id}
      </li>
    );

    const questionsTable = this.props.questionsArray.map((question) => {
      const isAnsweredQuestion = some(this.props.answersArray, { questionId: question.id });
      const isCurrentQuestion = this.props.currentQuestion === question.id;

      return QuestionItem(question.id, isAnsweredQuestion, isCurrentQuestion);
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
          <div className={classnames(
            { 'arrow-up': this.state.isOpen },
            { 'arrow-down': !this.state.isOpen },
          )}/>
        </button>

        {this.state.isOpen &&
          <div className="questions-board">
            <ul>
              {this.renderListOfQuestions()}
              <li className="current-question">
              </li>
            </ul>
          </div>
        }
      </div>
    )
  }
}

QuestionsMenu.propTypes = {
  answersArray: PropTypes.array,
  questionsArray: PropTypes.array,
  currentQuestion: PropTypes.number,
}

export default QuestionsMenu;
