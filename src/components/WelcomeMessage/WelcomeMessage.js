import React from 'react';
import './WelcomeMessage.scss';

const WelcomeMessage = () => {
  return (
    <section>
			<div className="container welcome-text">
				<h2><strong>BEM-VINDO</strong></h2>
				<p>O projeto VotaSP nasceu com o objetivo de ajudar a população do estado de São Paulo a escolher seus candidatos. Através de questões objetivas os eleitores podem verificar suas afinidades com os candidatos.<br /><strong>É muito simples e prático!</strong></p>
			</div>
		</section>
  );
};

export default WelcomeMessage;
