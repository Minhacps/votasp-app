import React, { Component } from 'react';
import firebase from 'firebase/app';
import PageLayout from '../PageLayout/PageLayout';

import './RedefinePassword.scss';

class RedefinePassword extends Component {

	state = {
		errorMessage: null
	}

	onSubmit = event => {
		event.preventDefault();
		const emailAddress = event.target.email.value;
		var auth = firebase.auth();
		auth.sendPasswordResetEmail(emailAddress).then(doc => {
			this.handleSendEmailSuccess();
		}).catch(this.handleSendEmailFailure);
	}

	handleSendEmailSuccess = () => {
		return this.updateErrorMessage('Email enviado com sucesso.');
	}

	handleSendEmailFailure = error => {
		console.log(error);
		switch (error.code) {
		  case 'auth/invalid-email': {
			return this.updateErrorMessage('O formato do e-mail informado é inválido.');
		  }
		  case 'auth/user-disabled': {
			return this.updateErrorMessage('Usuário desabilitado.');
		  }
	
		  case 'auth/user-not-found':{
			return this.updateErrorMessage('E-mail não encontrado na base de dados.');
		  }
	
		  default: {
			return this.updateErrorMessage('Ocorreu um erro inesperado.');
		  }
		}
	  };

	updateErrorMessage = errorMessage => {
		this.setState({ errorMessage });
	};

	render() {
		return (
			<PageLayout>
				<section className='RedefinePassword'>
					<form onSubmit={this.onSubmit}>
						<div className="field-wrapper">
							<label htmlFor="email">E-mail</label>
							<input type="text" className="input" name="email" id="email" required placeholder="Digite o e-mail para recuperar a senha" />
						</div>
						<button className="SubmitButton">Enviar</button>
					</form>
					<div>
						{this.state.errorMessage}
					</div>
				</section>
			</PageLayout>
		)
	}
}

export default RedefinePassword;