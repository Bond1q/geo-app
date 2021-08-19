import React from 'react'
import map from '../img/map.jpg'
import s from '../styles/home.module.scss'
function Home() {
	return (
		<div className={s.home}>
			<img src={map} alt="big map" />
		</div>
	)
}

export default Home
