import React, { PureComponent } from 'react';

import PageLayout from '../components/PageLayout/PageLayout';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage';

class Home extends PureComponent {
  render() {
    return (
      <PageLayout>
        <WelcomeMessage />
      </PageLayout>
    );
  }
}

export default Home;
