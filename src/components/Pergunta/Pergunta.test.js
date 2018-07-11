import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Pergunta from './Pergunta';

const defaultProps = {
  pergunta: {
    id: 1,
    question: 'Legalização do aborto para todos os casos.'
  }
}

describe('<Pergunta />', () => {
  it('should match snapshot', () => {
    const pergunta = shallow(<Pergunta {...defaultProps} />);

    expect(toJson(pergunta)).toMatchSnapshot();
  });
});
