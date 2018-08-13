import React from 'react';
import './Faq.css';
import questions from './faquestions.js';
import PageLayout from '../PageLayout/PageLayout';

const faq = () => {

	let questionsPage = [];
	questions.forEach(question => {
		questionsPage.push(
			<section key={question.id}>
				<h5>{question.question}</h5>
				<p>{question.answer}</p>
			</section>
		);
	});

	return (
		<PageLayout>
			<section className="faq">
				<h2 className="upper text-center titulo">
					Perguntas Frequentes
      	</h2>
				{questionsPage}
			</section>
		</PageLayout>
	);
}

export default faq;