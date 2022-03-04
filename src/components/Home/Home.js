import React from 'react';
import Hero from '../../assets/hero-img.jpg'

function Home() {
	return (
		<div className='home'>
			<h1>Hello from Home</h1>
			<img src={Hero} alt='test'/>
		</div>
	);
}

export default Home;
