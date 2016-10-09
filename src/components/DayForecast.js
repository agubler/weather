import React from 'react';

import Forecast from './Forecast';

export default (props) => {
	const forecast = props.forecast.map(item => {
		return <Forecast key={item.dt} data={item}/>;
	})

	return (
		<div className='row'>
			{forecast}
		</div>
	);
}
