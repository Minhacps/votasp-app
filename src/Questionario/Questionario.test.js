import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import QuestionarioService from './QuestionarioService';
import { RawQuestionario } from './Questionario';

jest.mock('./QuestionarioService');

const defaultProps = {
  perguntas: [
    {
      id: 1,
      question: 'Legalização do aborto para todos os casos.'
    },
    {
      id: 2,
      question: 'Adoção de crianças por casais do mesmo sexo.'
    }
  ],
  match: {
    params: {}
  },
  history: {
    push: () => {}
  },
  questionario: {}
};

describe('<Questionario />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const questionario = shallow(<RawQuestionario {...defaultProps} />);

    expect(toJson(questionario)).toMatchSnapshot();
  });
});
