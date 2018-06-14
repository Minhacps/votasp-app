import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Deputado from './Deputado';
import CircleButton from '../CircleButton/CircleButton';

const deputado = {
  nome: 'Nome do Candidato 1',
  numero: 999,
  partido: 'Nome Partido 1',
  afinidade: 80
};

const props = {
  onClickPlus: jest.fn(),
  onClickShare: jest.fn()
};

describe('<Deputado />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow((
      <Deputado {...deputado} {...props} />
    ));
  })

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
