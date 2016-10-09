import * as _ from 'lodash';
import moment from 'moment';

import * as actionTypes from './../constants/action-types';

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
export default (state = { loaded: false }, action) => {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case actionTypes.UPDATED_FORECAST:
			newState.loaded = true;
			newState.forecast = processForecast(action.forecast);

			if (!newState.selectedDay) {
				newState.selectedDay = newState.forecast.forecastDays[0];
			}

			return newState;
		case actionTypes.CHANGE_FORECAST_DAY:
			newState.selectedDay = action.day;

			return newState;
		default:
			return state;
	}
};
