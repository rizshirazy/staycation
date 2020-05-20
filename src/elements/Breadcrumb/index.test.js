import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Breadcrumb from './index.js';

const setup = () => {
	const breadcrumbList = [
		{ pageTitle: 'Home', pageHref: '' },
		{ pageTitle: 'House Details', pageHref: '/properties' },
	];

	const { container } = render(
		<Router>
			<Breadcrumb data={breadcrumbList} />
		</Router>,
	);

	const breadcrumb = container.querySelector('.breadcrumb');

	return { breadcrumb };
};

test(`Should have ol with className .breadcrumb and have text Home & House Details`, () => {
	const { breadcrumb } = setup();

	expect(breadcrumb).toBeInTheDocument();
	expect(breadcrumb).toHaveTextContent('Home');
	expect(breadcrumb).toHaveTextContent('House Details');
});
