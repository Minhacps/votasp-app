import React from 'react';
import { shallow } from 'enzyme';

import PageLayout from './PageLayout';

describe('PageLayout', () => {
  it('should render the provided children', () => {
    const wrapper = shallow(
      <PageLayout>
        <div id="fake-children">Fake children</div>
      </PageLayout>
    );

    expect(wrapper.find('#fake-children')).toHaveLength(1);
  });
});
