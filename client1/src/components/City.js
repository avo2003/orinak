import React, { useState, useEffect } from 'react';
import destinationAPI from '../apis/destinationsAPI';

export default function City({ match }) {
	const [destination, setDestination] = useState({});

	const cityId = match.params.id;
	useEffect(() => {
		const getDestination = async () => {
			const response = await destinationAPI.get(`/api/instagrams/${cityId}`);
			setDestination(response.data);
		};
		getDestination();
	}, [cityId]);

	return (
		<div className='ui container'>
			<div className='ui segments'>
				<div className='ui segment'>
					<img className='ui centered image' src={destination.avatar} alt='arten xosacel enq...' />
				</div>
				<div className='ui secondary segment'>
					<h2>
						{destination.name}, {destination.username}
					</h2>
					
				</div>
			</div>
		</div>
	);
}
