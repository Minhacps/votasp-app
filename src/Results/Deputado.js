import React from 'react';

const Deputado = ({ deputadoName, deputadoNumber, matchPercent, partidoName }) => <div>
  <div className='photo'>
    <img src="http://via.placeholder.com/350x150" alt="" style={{ width: 60, height: 60 }} />
  </div>
  <div className='info'>
    <div>
      <span className='candidat-name'>{deputadoName}</span>
      <span className='candidat-number'>{deputadoNumber}</span>
    </div>

    <div>
      <span className='partido-name'>{partidoName}</span>
    </div>

    <div>
      Afinidade: <span className='match-percent'>{matchPercent}%</span>
    </div>
  </div>
  <div className='buttons'>
    <button>+</button>
    <button>+</button>
  </div>
</div>

export default Deputado;
