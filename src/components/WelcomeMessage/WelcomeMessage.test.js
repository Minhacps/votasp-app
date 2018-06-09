import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import WelcomeMessage from './WelcomeMessage';

describe('<WelcomeMessage />', () => {
  it('should match snapshot', () => {
    const welcomeMessage = shallow((
      <WelcomeMessage />
    ))

    expect(toJson(welcomeMessage)).toMatchSnapshot();
  });
});
