import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import QuestionMenu from './QuestionsMenu';

describe('QuestionsMenu', () => {
  it('should match a snapshot', () => {
    const questionMenu = shallow((
      <QuestionMenu />
    ))

    expect(toJson(questionMenu)).toMatchSnapshot();
  })

  it('should toggle questions board when click on questions button', () => {
    const questionMenu = shallow((
      <QuestionMenu />
    ))

    questionMenu.find('.questions-button').simulate('click');
    expect(questionMenu.find('.questions-board')).toHaveLength(1)

    questionMenu.find('.questions-button').simulate('click');
    expect(questionMenu.find('.questions-board')).toHaveLength(0)

  })
})
