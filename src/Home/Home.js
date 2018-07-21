import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PageLayout from '../components/PageLayout/PageLayout';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage';
import QuestionsMenu from '../components/QuestionsMenu/QuestionsMenu';
import { answersMock, questionsMock } from '../components/QuestionsMenu/QuestionsMenuMock';

class Home extends PureComponent {
  render() {
    return (
      <PageLayout>
        <WelcomeMessage userName={this.props.auth0.userData.name} />
        <QuestionsMenu answersArray={answersMock} questionsArray={questionsMock} />
      </PageLayout>
    );
  }
}

const mapStateToProps = ({ auth0 }) => ({
  auth0
});

export default connect(mapStateToProps)(Home);
