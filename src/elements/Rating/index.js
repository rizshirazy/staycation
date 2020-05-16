import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Rating = ({ value, height, width, spacing, className }) => {
	const decimals = Number(value) % 1;
	const star = [];
	let leftPos = 0;

	for (let index = 0; index < 5 && index < value - decimals; index++) {
		leftPos = leftPos + width;
		star.push(
			<div
				className='star'
				key={`star-${index}`}
				style={{
					left: index * width,
					width,
					height,
					marginRight: spacing,
				}}></div>,
		);
	}
	if (decimals > 0 && value <= 5) {
		star.push(
			<div
				className='star'
				key={`starWithDecimals`}
				style={{
					left: leftPos,
					width: decimals * width - spacing,
					height,
				}}></div>,
		);
	}

	const starPlaceholder = [];
	for (let index = 1; index < 5; index++) {
		starPlaceholder.push(
			<div
				className='star placeholder'
				key={`starPlaceholder-${index}`}
				style={{
					left: index * width,
					width,
					height,
					marginRight: spacing,
				}}></div>,
		);
	}

	return (
		<>
			<div className={['stars', className].join(' ')} style={{ height }}>
				{starPlaceholder}
				{star}
			</div>
		</>
	);
};

Rating.propTypes = {
	className: PropTypes.string,
	value: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	spacing: PropTypes.number,
};

export default Rating;
