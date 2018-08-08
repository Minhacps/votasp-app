import React, { Component } from 'react';
import classnames from 'classnames';

import logoUrl from '../../img/MeuVoto_03_AssinaturaMonocromatica.png';

import './FormLayout.css';

const FormLayout = ({ children, showLoginPage, activeTab }) => {
  const tabButtonClasses = tab =>
    classnames('authentication__tab-button', {
      'authentication__tab-button--active': activeTab === tab
    });
  const signinTabClasses = tabButtonClasses('signin');
  const signupTabClasses = tabButtonClasses('signup');

  return (
    <section className="authentication__form-layout">
      <div className="complete-signup__background" />
      <div className="authentication__form-wrapper">
        <header className="authentication__form-header">
          <img
            className="logo"
            src={logoUrl}
            alt="Logotipo escrito Vota em branco e SP em amarelo."
          />
        </header>

        <div className="authentication__tab-buttons">
          <button className={signinTabClasses} type="button" onClick={() => showLoginPage(true)}>
            Entrar
          </button>
          <button className={signupTabClasses} type="button" onClick={() => showLoginPage(false)}>
            Cadastrar
          </button>
        </div>
        {children}
      </div>
    </section>
  );
};

export default FormLayout;
