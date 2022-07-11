import React, { useState, useEffect } from 'react';
import './Portfolio.css';

function Portfolio() {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch('https://avanto-photography-backend.herokuapp.com/api/portfolios')
			.then((res) => res.json())
			.then((res) => {
				setPhotos(res);
			});
	}, []);

	return (
		<div className='portfolio'>
			<ul className='portfolio-list'>
				{photos.map((photo) => {
					return (
						<li className='portfolio-list-items'>
							<img className='portfolio-images' src={photo.image} alt={photo.title} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Portfolio;
