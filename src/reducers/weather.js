import * as _ from 'lodash';
import moment from 'moment';

function processForecast(forecast) {
	const forecastDays = [];
	const groupedForecast = _.groupBy(forecast.list, (item) => {
		const day = moment(item.dt_txt).format('dddd');
		if (forecastDays.indexOf(day) === -1) {
			forecastDays.push(day);
		}
		return day;
		});

	return { forecastDays, groupedForecast };
}

/**
 * Reducer for weather actions
 */
export default (state = { updating: true }, action) => {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case 'UPDATING_FORECAST':
			newState.updating = true;

			return newState;
		case 'UPDATED_FORECAST':
			newState.updating = false;
			newState.forecast = processForecast(action.forecast);
			if (!newState.selectedDay) {
				newState.selectedDay = newState.forecast.forecastDays[0];
			}

			return newState;
		case 'CHANGE_FORECAST_DAY':
			newState.selectedDay = action.day;

			return newState;
		default:
			return state;
	}
}
