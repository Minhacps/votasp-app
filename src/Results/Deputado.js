import React from 'react';

const noop = () => {};

const Deputado = ({ nome, numero, partido, afinidade,
  onClickShare = noop, onClickPlus = noop }) => <div>
  <div className='photo'>
    <img src="http://via.placeholder.com/350x150" alt="" style={{ width: 60, height: 60 }} />
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
    <button onClick={onClickShare}>+</button>
    <button onClick={onClickPlus}>+</button>
  </div>
</div>

export default Deputado;
