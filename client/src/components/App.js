//Core
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
//Pages
import HomePage from 'pages/HomePage';
//Components
import { Layout, Loader } from './Commons';

const App = () => (
	<Layout>
		<Suspense fallback={<Loader onLoad={true} />}>
			<Switch>
				<Route path="/" exact component={HomePage} />
			</Switch>
		</Suspense>
	</Layout>
);

export default App;
