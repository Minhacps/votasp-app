import React from 'react';
import './Deputado.scss';
import CircleButton from '../CircleButton/CircleButton';

const noop = () => {};

const Deputado = ({ nome, numero, partido, afinidade, onClickShare, onClickPlus }) => (
  <div className='deputado-list-item'>
    <div className='photo'>
      <img src="http://via.placeholder.com/150x150?text=Foto" alt="" />
    </div>
    <div className='info'>
      <div>
        <span className='candidat-name'>{nome}</span>
        <span className='candidat-number'>{numero}</span>
      </div>

      <div>
        <span className='partido-name'>{partido}</span>
      </div>

      <div>
        Afinidade: <span className='match-percent'>{afinidade}%</span>
      </div>
    </div>
    <div className='buttons'>
      <CircleButton content={<i className='fa fa-plus' />} onClick={onClickShare} />
      <CircleButton content={<i className='fa fa-share-alt' />} onClick={onClickPlus} />
    </div>
  </div>
)

Deputado.defaultProps = {
  onClickShare: noop,
  onClickPlus: noop
};

export default Deputado;
