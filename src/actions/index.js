
/**
 * Proxy API for open weather map.
 */
function fetchForcast(location) {
	const url = `https://quiet-peak-68178.herokuapp.com/forecast?location=${location}`;
	return fetch(url).then(response => response.json());
}

export const getForecast = (location) => {
	return function (dispatch) {
			dispatch({ type: 'UPDATING_FORCAST' });
		return fetchForcast(location).then(
			forecast => dispatch({ type: 'UPDATED_FORECAST', location, forecast })
		);
	};
}

export const selectDay = (day) => {
	return function (dispatch) {
		dispatch({ type: 'CHANGE_FORECAST_DAY', day });
	}
}
