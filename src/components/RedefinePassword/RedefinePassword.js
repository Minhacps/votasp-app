import React, { Component } from 'react';
import firebase from 'firebase/app';
import PageLayout from '../PageLayout/PageLayout';

import './RedefinePassword.scss';

class RedefinePassword extends Component {

	onSubmit = event => {
		event.preventDefault();
		const emailAddress = event.target.email.value;
		var auth = firebase.auth();
		auth.sendPasswordResetEmail(emailAddress).then(function () {
			console.log('E-mail enviado');
		}).catch(function (error) {
			console.log("Erro no envio do e-mail");
		});
	}

	render() {
		return (
			<PageLayout>
				<section className='RedefinePassword'>
					<form onSubmit={this.onSubmit}>
						<div className="authentication__form-content">
							<div className="field-wrapper">
								<label htmlFor="email">E-mail</label>
								<input type="text" className="input" name="email" id="email" required placeholder="Digite o e-mail para recuperar a senha"/>
							</div>
							<button className="SubmitButton">Enviar</button>
						</div>
					</form>
				</section>
			</PageLayout>
		)
	}
}

export default RedefinePassword;