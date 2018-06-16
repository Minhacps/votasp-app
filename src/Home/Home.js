import React, { Component } from 'react';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage';
import QuestionsMenu from '../components/QuestionsMenu/QuestionsMenu';
import {
  answersMock,
  questionsMock
} from '../components/QuestionsMenu/QuestionsMenuMock';

const Home = () => (
  <React.Fragment>
    <QuestionsMenu answersArray={answersMock} questionsArray={questionsMock} />
    <WelcomeMessage />
  </React.Fragment>
);

export default Home;
