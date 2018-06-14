import React, { Component } from 'react';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage';
import QuestionsMenu from '../components/QuestionsMenu/QuestionsMenu';

const Home = () => (
  <React.Fragment>
    <QuestionsMenu />
    <WelcomeMessage />
  </React.Fragment>
);

export default Home;
