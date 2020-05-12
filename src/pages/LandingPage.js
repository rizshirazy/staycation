import React, { Component } from 'react';

import Header from 'partials/Header';
import Hero from 'partials/Hero';
import MostPicked from 'partials/MostPicked';

import landingPage from 'json/landingPage.json';

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
		this.state = {};
	}

	render() {
		return (
			<>
				<Header {...this.props} />
				<Hero
					refMostPicked={this.refMostPicked}
					data={landingPage.hero}
				/>
				<MostPicked
					refMostPicked={this.refMostPicked}
					data={landingPage.mostPicked}
				/>
			</>
		);
	}
}
