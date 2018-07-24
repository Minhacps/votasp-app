import React from 'react';
import './CircleButton.scss';

export default props => {
  const {
    onClick = () => {},
    content
  } = props;
  return <button className='circle-button' onClick={onClick}>{content}</button>
}
