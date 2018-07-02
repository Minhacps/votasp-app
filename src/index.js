import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';
import './styles/index.scss';
import './styles/helper.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
