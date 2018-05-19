import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('should work', () => {
    const element = shallow(<App />);

    console.log(element.debug());
  });
});
