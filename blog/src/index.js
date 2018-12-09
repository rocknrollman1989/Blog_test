import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  rootReduser  from './reducers/rootReduser'
import  thunk from 'redux-thunk'


const store = createStore(rootReduser, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
