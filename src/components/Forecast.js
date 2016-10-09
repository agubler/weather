import React from 'react';
import moment from 'moment';

export default (props) => {
	const icon = props.data.weather[0].icon;

	return (
		<div className='col-md-3 col-xs-6'>
			<div className='weather'>
				<h4 className='text-center'>{moment(props.data.dt_txt).format('HH:mm:ss')}</h4>
				<div><img src={`http://openweathermap.org/img/w/${icon}.png`} role='presentation'/>{props.data.main.temp} °C</div>
			</div>
		</div>
	);
}
