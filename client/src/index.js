//Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Components
import App from 'components/App';
//Styles
import GlobalStyles from 'index.styles';

ReactDOM.render(
	<Router>
		<App />

		<GlobalStyles />
	</Router>,
	document.getElementById('root'),
);
