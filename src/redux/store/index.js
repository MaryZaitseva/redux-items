import { createStore } from 'redux';
import { compose } from 'redux';
import rootReducer from '../reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers();
const store = createStore(rootReducer, enhancer);

window.reduxStore = store;

export default store;