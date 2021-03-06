import React, { Component } from 'react';

import Header from 'partials/Header';
import Hero from 'partials/Hero';
import MostPicked from 'partials/MostPicked';
import Categories from 'partials/Categories';

import landingPage from 'json/landingPage.json';
import Testimony from 'partials/Testimony';
import Footer from 'partials/Footer';

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
		this.state = {};
	}

	componentDidMount() {
		window.title = 'Staycation | Home';
		window.scrollTo(0, 0);
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
				<Categories data={landingPage.categories} />
				<Testimony data={landingPage.testimonial} />
				<Footer />
			</>
		);
	}
}
