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
  ]
};

describe('<Questionario />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const questionario = shallow(<RawQuestionario {...defaultProps} />);

    expect(toJson(questionario)).toMatchSnapshot();
  });

  it('should increment currentQuestion state', async () => {
    const questionario = shallow(<RawQuestionario {...defaultProps} />);

    await questionario.instance().pularQuestao();
    questionario.update();

    expect(questionario.state('currentQuestion')).toBe(1);
  });

  it('should not increment currentQuestion state when it reaches final question', () => {
    const questionario = shallow(<RawQuestionario {...defaultProps} />);

    const currentQuestion = defaultProps.perguntas.length - 1;
    questionario.setState({ currentQuestion });
    questionario.instance().pularQuestao();

    expect(questionario.state('currentQuestion')).toBe(1);
  });
});
