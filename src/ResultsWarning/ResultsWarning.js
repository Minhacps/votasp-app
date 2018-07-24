import React from 'react';

import PageLayout from '../components/PageLayout/PageLayout';

const ResultsWarning = () => {
  return (
    <PageLayout>
      <section>
        <div className="container welcome-text">
          <h2>
            <strong>Obrigado por responder!</strong>
          </h2>
          <p>
            Estamos coletando dados para que o ranking seja o mais assertivo para você. Em breve teremos resultados e te avisaremos para que você possa consultá-los.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResultsWarning;
