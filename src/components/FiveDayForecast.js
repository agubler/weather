import React from 'react';
import classNames from 'classnames';

import DayForecast from './DayForecast';

function onClick(dispatch, selectedDay) {
	dispatch({ type: 'CHANGE_FORECAST_DAY', day: selectedDay });
}

function getDayMenu(forecastDays, selectedDay, dispatch) {
	return forecastDays.map(day => {

		const baseClasses = ['btn', 'btn-default'];
		if (day === selectedDay) {
			baseClasses.push('active')
		}
		const classes = classNames(baseClasses);
		return <a key={day} onClick={() => onClick(dispatch, day)} className={classes} role='button'>{day}</a>
	});
}

export default (props) => {
	const selectedDay = props.weather.selectedDay;
	const forecastDays = props.weather.forecast.forecastDays;
	const activeForcast = props.weather.forecast.groupedForecast[selectedDay];
	const dayMenu = getDayMenu(forecastDays, selectedDay, props.dispatch);

	return (
		<div className="container">
			<div className='btn-group btn-group-justified' role='group'>
				{dayMenu}
			</div>
			<div className="container">
				<DayForecast forecast={activeForcast} />
			</div>
		</div>
	);
}
