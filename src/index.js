import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';
import './styles/index.scss';
import './styles/helper.scss';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
