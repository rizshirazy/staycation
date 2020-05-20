import React, { Component } from 'react';
import Header from 'partials/Header';
import PageDetailTitle from 'partials/PageDetailTitle';

import itemDetails from 'json/itemDetails.json';
import FeaturedImage from 'partials/FeaturedImage';
import PageDetailDescription from 'partials/PageDetailDescription';

export default class DetailPage extends Component {
	componentDidMount() {
		window.title = `Staycation | ${itemDetails.name}`;
		window.scrollTo(0, 0);
	}

	render() {
		const breadcrumb = [
			{ pageTitle: 'Home', pageHref: '' },
			{ pageTitle: `${itemDetails.type} Details`, pageHref: '' },
		];

		return (
			<>
				<Header {...this.props} />
				<PageDetailTitle data={itemDetails} breadcrumb={breadcrumb} />
				<FeaturedImage data={itemDetails.imageUrls} />
				<div className='container'>
					<div className='row'>
						<div className='col-7 pr-5'>
							<PageDetailDescription data={itemDetails} />
						</div>
						<div className='col-5'></div>
					</div>
				</div>
			</>
		);
	}
}
