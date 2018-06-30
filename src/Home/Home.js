import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader/Loader';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage';
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
      <React.Fragment>
        <WelcomeMessage userName={this.props.auth0.userData.name} />
        <QuestionsMenu answersArray={answersMock} questionsArray={questionsMock} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ auth0 }) => ({
  auth0,
});

export default connect(mapStateToProps)(Home);
