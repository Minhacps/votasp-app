import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';
import './styles/index.scss';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
