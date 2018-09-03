import React from 'react';

import PageLayout from '../components/PageLayout/PageLayout';

const QuestionarioFinalizado = () => {
  return (
    <PageLayout>
      <section>
        <div className="container welcome-text">
          <h2>
            <strong>Obrigado por responder!</strong>
          </h2>
          <p>
            A partir de agora você aparecerá no ranking para todos os eleitores.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default QuestionarioFinalizado;
