import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Typically one root component and in that we nest all the necessary components */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
