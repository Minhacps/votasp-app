import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { getQuestions } from '../services/questions';

import { RawQuestionario } from './Questionario';

jest.mock('../services/questions');

const defaultProps = {
  perguntas: [
    {
      id: 1,
      question: 'Legalização do aborto para todos os casos.'
    },
    {
      id: 2,
      question: 'Adoção de crianças por casais do mesmo sexo.'
    },
  ],
}

describe('<Questionario />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const questionario = shallow(<RawQuestionario {...defaultProps} />);

    expect(toJson(questionario)).toMatchSnapshot();
  });

  it('should increment currentQuestion state', () => {
    const questionario = shallow(<RawQuestionario {...defaultProps} />);

    questionario.instance().pularQuestao();
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

  it('should call questions service to get all the questions', () => {
    const questionario = shallow(<RawQuestionario {...defaultProps} />);
    questionario.update();
    expect(getQuestions).toHaveBeenCalledTimes(1);
  });
});
