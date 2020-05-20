import React, { Component } from 'react';

import { InputDate } from 'elements/Form';

export default class Example extends Component {
	state = {
		value: {
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	render() {
		return (
			<div className='container'>
				<div
					className='row align-items-center justify-content-center'
					style={{ height: '100vh' }}>
					<div className='col-auto'>
						<InputDate
							onChange={this.handleChange}
							name='value'
							value={this.state.value}
						/>
					</div>
				</div>
			</div>
		);
	}
}
