import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default () => createStoreWithMiddleware(reducers);