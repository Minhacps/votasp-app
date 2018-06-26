import React from 'react';
import './ProgressBar.scss';
import classNames from 'classnames';

export default props => {
  const {
    steps = [],
    value = 0
  } = props;

  const stepPoints = steps.map((step, key) => {
    const stepPointClass = classNames('step-point', {
      active: value >= step.value
    });

    return <g key={key}>
        <circle cx={step.value} cy='5' r='3' className={stepPointClass} />
        <text x={step.value} y='13' className='step-point-label'>{step.label}</text>
      </g>
  });

  return <div className='progress-bar-container'>
    <svg viewBox='-6 0 112 15' className='view-port'>
      <line x1='0' x2='100' y1='5' y2='5' strokeWidth='4' strokeLinecap='round' stroke='white' />
      { stepPoints }
      <line x1='0' x2={value} y1='5' y2='5' strokeWidth='2' strokeLinecap='round' className='fill-bar' />
    </svg>
  </div>
};
