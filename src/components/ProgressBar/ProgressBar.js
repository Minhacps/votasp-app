import React from 'react';
import './ProgressBar.scss';
import classNames from 'classnames';

export default props => {
  const { values = [], label } = props;

  return  (
    <div className='progress-bar__container'>
      <span className="progress-bar__label">
        {label}
      </span>
      <div className="progress-bar__background">
        {values.map((value, index) => (
          <div
            key={index}
            className={classNames(
              "progress-bar__progress",
              `progress-bar__progress-${index}`,
            )}
            style={{ width: value.value, backgroundColor: value.color }}
          />
        ))
        }
      </div>
    </div>
  )
};
