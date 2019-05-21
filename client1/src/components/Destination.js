import React from 'react';
import { Link } from 'react-router-dom';

export default function Location({ destination }) {
	return (
		<div className='column'>
			<div className='ui fluid card'>
				<div className='image'>
					<img src={destination.avatar} alt='you know what this is...' />
				</div>
				<div className='content'>
					<div className='header'>{destination.name}</div>
					<div className='meta'>
						<div>{destination.username}</div>
					</div>
					<Link to={`/city/${destination._id}`} className='ui right floated button'>
						Read More...
					</Link>
				</div>
			</div>
		</div>
	);
}
