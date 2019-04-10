import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Firebase/';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Router />
        </FirebaseContext.Provider>, document.getElementById('root')
        );
serviceWorker.unregister();
