import "bootstrap/dist/css/bootstrap.min.css"
import './Navbar.css';
import './Player.css'
import './index.css'
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

function renderApp(argument) {
	ReactDOM.render(
		<React.StrictMode>
		    <App />
		</React.StrictMode>,
	  document.getElementById('root')
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
renderApp();