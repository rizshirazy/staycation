import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { DateRange } from 'react-date-range';

import './index.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import formatDate from 'utils/FormatDate';
import iconCalendar from 'assets/icons/ic_calendar.svg';

const InputDate = (props) => {
	const { value, placeholder, name } = props;
	const [isShowed, setIsShowed] = useState(false);

	const datePickerChange = (value) => {
		const target = {
			target: {
				value: value.selection,
				name: name,
			},
		};

		props.onChange(target);
	};

	const refDate = useRef(null);
	const hanldeClickOutside = (event) => {
		if (refDate && !refDate.current.contains(event.target)) {
			setIsShowed(false);
		}
	};

	const check = (focus) => {
		focus.indexOf(1) < 0 && setIsShowed(false);
	};

	const displayDate = `${value.startDate ? formatDate(value.startDate) : ''}${
		value.endDate ? ' - ' + formatDate(value.endDate) : ''
	}`;

	useEffect(() => {
		document.addEventListener('mousedown', hanldeClickOutside);
		return () => {
			document.removeEventListener('mousedown', hanldeClickOutside);
		};
	});

	return (
		<div
			ref={refDate}
			className={['input-date mb-3', props.outerClassName].join(' ')}>
			<div className='input-group'>
				<div className='input-group-prepend bg-gray-900'>
					<div className='input-group-text'>
						<img src={iconCalendar} alt='icon calendar' />
					</div>
				</div>
				<input
					readOnly
					type='text'
					className='form-control'
					value={displayDate}
					placeholder={placeholder}
					onClick={() => setIsShowed(!isShowed)}
				/>

				{isShowed && (
					<div className='date-range-wrapper'>
						<DateRange
							editableDateInputs={true}
							onChange={datePickerChange}
							moveRangeOnFirstSelection={false}
							onRangeFocusChange={check}
							ranges={[value]}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

InputDate.propTypes = {
	value: PropTypes.object,
	onChange: PropTypes.func,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	outerClassName: PropTypes.string,
};

export default InputDate;
