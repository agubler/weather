import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';

import * as actions from './index';
import * as types from '../constants/action-types';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
	it('should create an action to change the forecast day', () => {
		const day = 'Day';
		const expectedAction = {
			type: types.CHANGE_FORECAST_DAY,
			day
		};
		expect(actions.selectDay(day)).toEqual(expectedAction);
	});
});

describe('async actions', () => {
	afterEach(() => {
		nock.cleanAll();
	});

	it('creates UPDATED_FORCAST when fetching forecast has been done', () => {
		const location = 'test-location';

		nock('https://quiet-peak-68178.herokuapp.com')
			.get(`/forecast?location=${location}`)
			.reply(200, { body: { success: true } });

		const expectedActions = [
			{ type: types.UPDATING_FORECAST },
			{ type: types.UPDATED_FORECAST, location: location, forecast: { success: true }  }
		];
		const store = mockStore({ });

		return store.dispatch(actions.fetchForecast(location))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
	});
});
