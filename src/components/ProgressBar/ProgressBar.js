import React from 'react';
import './ProgressBar.scss';

export default props => {
  const {
    color,
    steps = []
  } = props;

  const insideBarSylte = {
    'background-color': color
  };

  const stepPoints = steps.map((step, key) => {
    const style = { left: `${step.value}%` };
    return <div className='step' style={style} key={key}></div>
  });

  return <div className='progress-bar-container'>
    <div className='outside-bar'>
      <div className='inside-bar' style={insideBarSylte}></div>
      {stepPoints}
    </div>
  </div>
};
