import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import WelcomeMessage from './WelcomeMessage';

describe('<WelcomeMessage />', () => {
  it('should render component without props', () => {
    const welcomeMessage = shallow(<WelcomeMessage userName="Foo Bar" />);

    expect(toJson(welcomeMessage)).toMatchSnapshot();
  });

  it('should accept valid regionTag', () => {
    const welcomeMessage = shallow(
      <WelcomeMessage regionTag="sp" userName="Foo Bar" />
    );

    expect(toJson(welcomeMessage)).toMatchSnapshot();
  });

  it('should use sp if invalid regionTag', () => {
    const welcomeMessage = shallow(
      <WelcomeMessage regionTag="huehuehue" userName="Foo Bar" />
    );

    expect(toJson(welcomeMessage)).toMatchSnapshot();
  });
});
