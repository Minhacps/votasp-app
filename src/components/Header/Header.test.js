import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './Header';

describe('<Header />', () => {
  it('should match snapshot', () => {
    const header = shallow((
      <Header />
    ))

    expect(toJson(header)).toMatchSnapshot();
  });
});
