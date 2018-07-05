import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RespostaRadioButton from './RespostaRadioButton';

const defaultProps = {
  label: 'foo',
  value: 'bar',
  id: '1',
  checked: false,
};

describe('<RespostaRadioButton />', () => {
  it('should match snapshot', () => {
    const respostaRadioButton = shallow(<RespostaRadioButton {...defaultProps} />);

    expect(toJson(respostaRadioButton)).toMatchSnapshot();
  });

  it('should call onClick passed function', () => {
    const onClick = jest.fn();
    const respostaRadioButton = shallow((
      <RespostaRadioButton
        {...defaultProps}
        onClick={onClick}
      />
    ));

    respostaRadioButton.find('.resposta-radio-btn__input').simulate('click');

    expect(onClick).toBeCalled();
  });
});
