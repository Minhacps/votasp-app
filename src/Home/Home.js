import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader/Loader';
import PageLayout from '../components/PageLayout/PageLayout';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage';
import CompleteSignup from '../components/CompleteSignup/CompleteSignup';
import QuestionsMenu from '../components/QuestionsMenu/QuestionsMenu';
import {
  answersMock,
  questionsMock
} from '../components/QuestionsMenu/QuestionsMenuMock';

class Home extends PureComponent {
  render() {
    if (this.props.auth0.isLoading) {
      return <Loader />;
    }

    return (
      <PageLayout>
        <WelcomeMessage userName={this.props.auth0.userData.name} />
        <QuestionsMenu
          answersArray={answersMock}
          questionsArray={questionsMock}
        />
        <hr />
        <CompleteSignup />
      </PageLayout>
    );
  }
}

const mapStateToProps = ({ auth0 }) => ({
  auth0
});

export default connect(mapStateToProps)(Home);
