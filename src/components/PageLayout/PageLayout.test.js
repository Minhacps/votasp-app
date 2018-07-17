import React from 'react';
import { shallow } from 'enzyme';

import CompleteSignup from '../../components/CompleteSignup/CompleteSignup';
import { CANDIDATE } from '../../constants/userProfile';

import { RawPageLayout } from './PageLayout';

describe('PageLayout', () => {
  it('should render CompleteSignup when it is a new user', () => {
    const newUserMetaData = {
      name: 'Foo bar',
      city: 'Lorem ipsum'
    };

    const wrapper = shallow(
      <RawPageLayout userMetaData={newUserMetaData}>
        <div id="fake-children">Fake children</div>
      </RawPageLayout>
    );

    expect(wrapper.find('#fake-children')).toHaveLength(0);
    expect(wrapper.find(CompleteSignup)).toHaveLength(1);
  });

  it('should render the provided children when the user has a complete profile', () => {
    const completeUserMetaData = {
      name: 'Foo bar',
      city: 'Lorem ipsum',
      userProfile: CANDIDATE
    };

    const wrapper = shallow(
      <RawPageLayout userMetaData={completeUserMetaData}>
        <div id="fake-children">Fake children</div>
      </RawPageLayout>
    );

    expect(wrapper.find('#fake-children')).toHaveLength(1);
    expect(wrapper.find(CompleteSignup)).toHaveLength(0);
  });
});
