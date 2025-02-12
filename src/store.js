import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { movieReducer } from './reducers';
import { Provider } from 'react-redux';

const store = createStore(movieReducer, applyMiddleware(thunk));
export default store;