import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'

import WeatherApp from './components/WeatherApp';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<WeatherApp />
	</Provider>,
	document.getElementById('main')
);

