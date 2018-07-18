import React from 'react';
import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';
import './styles/helper.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import Routes from './routes';

import './styles/index.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
