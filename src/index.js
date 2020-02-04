import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import cartReducer from './components/reducers/cartReducer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// const reducer = combineReducers ({
//     cart: cartReducer,

    
// })

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
