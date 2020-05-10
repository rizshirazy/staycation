import React, { Component } from 'react';

import Header from 'partials/Header';
import Hero from 'partials/Hero';

import landingPage from 'json/landingPage.json';

export default class LandingPage extends Component {
	render() {
		return (
			<>
				<Header {...this.props} />
				<Hero data={landingPage.hero} />
			</>
		);
	}
}
