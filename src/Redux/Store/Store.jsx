import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducer from '../Reducer/Index';
import thunk from 'redux-thunk';

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

let enhancer = applyMiddleware(thunk);
if (process.env.NODE_ENV === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(thunk)
  )
}

var store = createStore(
    combineReducers(reducer),
    enhancer
);

export default store;