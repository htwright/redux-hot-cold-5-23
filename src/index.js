import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
// import {newGame, newGuess, toggleInfoModal} from './actions/index';
import './reset.css';
import './index.css';
import Game from './components/game';


// store.dispatch(newGame());
// store.dispatch(newGuess(20));
// store.dispatch(toggleInfoModal());
// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
