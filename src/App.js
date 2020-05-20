import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'assets/scss/styles.scss';
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';

function App() {
	return (
		<Router>
			<Route exact path='/' component={LandingPage}></Route>
			<Route exact path='/example' component={Example}></Route>
		</Router>
	);
}

export default App;
