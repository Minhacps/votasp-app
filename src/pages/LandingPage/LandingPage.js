import React from 'react';

import Header from '../../components/Header/Header';
import PassosComoFunciona from '../../components/ComoFunciona/PassosComoFunciona';

const LandingPage = () => (
  <React.Fragment>
    <Header />
    <div className="como-funciona">
      <PassosComoFunciona />
    </div>
  </React.Fragment>
);

export default LandingPage;
