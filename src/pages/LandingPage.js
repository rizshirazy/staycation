import React, { Component } from 'react';

import Header from 'partials/Header';

export default class LandingPage extends Component {
	render() {
		return (
			<>
				<Header {...this.props} />
			</>
		);
	}
}
