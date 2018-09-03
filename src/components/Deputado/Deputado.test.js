import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Deputado from './Deputado';
import CircleButton from '../CircleButton/CircleButton';

const deputado = {
  name: 'Nome do Candidato 1',
  number: 999,
  politicalParty: 'Nome Partido 1',
  matchScore: 8000
};

const props = {
  onClickPlus: jest.fn(),
  onClickShare: jest.fn(),
  ...deputado
};

describe('<Deputado />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Deputado {...props} />);
  });

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
