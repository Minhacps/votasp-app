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
        <a href="#">{id}</a>
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
      <div className={classnames(
        'questions-menu',
        { 'active': this.state.isOpen },
      )}>
        <button
          type="button"
          className="questions-button"
          onClick={this.toggleQuestionsBoard}
        >
          Questões
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
          </svg>
        </button>
        {this.state.isOpen &&
          <div className="questions-board">
            <ol>
              {this.renderListOfQuestions()}
              <li className="current-question">
              </li>
            </ol>
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
