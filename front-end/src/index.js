import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// render the router helper and App component to the root ID in index.html
ReactDOM.render((
	<App />
), document.getElementById('root'));
registerServiceWorker();
