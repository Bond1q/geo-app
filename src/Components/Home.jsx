import React from 'react'
import map from '../img/map.svg'
import s from '../styles/home.module.scss'

const Home = () => {
	return (
		<div className={s.home}>
			<img src={map} alt="big map" />
		</div>
	)
}

export default Home
