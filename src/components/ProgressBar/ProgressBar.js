import React from 'react';
import './ProgressBar.scss';
import classNames from 'classnames';

export default props => {
  const {
    values = []
  } = props;

  const bars = values.sort((v1, v2) => v2.value - v1.value)
    .map((value, index) => <line key={index} x1='0' x2={value.value} y1='5' y2='5'
      strokeWidth='2' strokeLinecap='round' className='fill-bar' stroke={value.color} />);

  return <div className='progress-bar-container'>
    <svg viewBox='-4 0 108 10' className='view-port'>
      <line x1='0' x2='100' y1='5' y2='5' strokeWidth='4' strokeLinecap='round' stroke='white' />

      { bars }
    </svg>
  </div>
};
