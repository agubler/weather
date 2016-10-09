import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as forecastActions from '../actions';
import FiveDayForecast from './FiveDayForecast';
import './weather-app.css';

class WeatherApp extends React.Component {

	componentDidMount() {
		this.fetchForecast(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.fetchForecast(nextProps);
	}

	fetchForecast(props) {
		if (!props.weather.forecast) {
			this.props.actions.getForecast('London');
		}
	}

	getFiveDayForecast() {
		return this.props.weather.updating ? <div>Fetching Weather...</div> : <FiveDayForecast weather={this.props.weather} dispatch={this.props.dispatch}/>;
	}

	render() {
		return (
			<div>
				<div className='jumbotron'>
					<div className='container'>
						<h1 className='text-center display-1'>London Five Day Weather Forecast</h1>
					</div>
				</div>
				<div className='container'>
					{ this.getFiveDayForecast() }
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		weather: state.weather
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(forecastActions, dispatch),
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp)
