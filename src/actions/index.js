import * as actionTypes from '../constants/action-types';

function fetchForecastSuccess(location, forecast) {
	return {
		type: actionTypes.UPDATED_FORECAST,
		location,
		forecast
	};
}

export const fetchForecast = (location) => {
	const url = `https://quiet-peak-68178.herokuapp.com/forecast?location=${location}`;

	return function (dispatch) {
		return fetch(url).then(response => response.json()).then(
			forecast => dispatch(fetchForecastSuccess(location, forecast))
		);
	};
};


export const selectDay = (day) => {
	return {
		type: actionTypes.CHANGE_FORECAST_DAY,
		day
	};
};
