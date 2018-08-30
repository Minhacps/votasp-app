import dev from './dev';
import prod from './prod';

const currentEnv = process.env.NODE_ENV === 'dev' ? dev : prod;

export default currentEnv;
