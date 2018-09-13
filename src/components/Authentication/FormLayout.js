import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import logoUrl from '../../img/logo-votasp.svg';

import './FormLayout.css';

const FormLayout = ({
  children,
  showLoginPage,
  activeTab,
  errorMessage,
  hideTabs,
  successMessage
}) => {
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
          <Link to="/app">
            <img
              className="logo"
              src={logoUrl}
              alt="Logotipo escrito Vota em branco e SP em amarelo."
            />
          </Link>
        </header>

        <div className="authentication__tab-buttons">
          {!hideTabs && (
            <React.Fragment>
              <button
                className={signinTabClasses}
                type="button"
                onClick={() => showLoginPage(true)}
              >
                Entrar
              </button>
              <button
                className={signupTabClasses}
                type="button"
                onClick={() => showLoginPage(false)}
              >
                Cadastrar
              </button>
            </React.Fragment>
          )}
        </div>

        {errorMessage && (
          <div className="authentication__alert">
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          </div>
        )}

        {successMessage && (
          <div className="authentication__alert">
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default FormLayout;
