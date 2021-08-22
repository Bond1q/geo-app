import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../styles/navbar.module.scss'
const Navbar = () => {
	console.log('navbar');
	return (
		<div>
			<div className={s.navbar}>
				<div className={s.row}>
					<div><NavLink exact activeClassName={s.active} to='/' >Home</NavLink></div>
					<div><NavLink activeClassName={s.active} to='/countries' >Countries</NavLink></div>
					<div><NavLink activeClassName={s.active} to='/game' >Play a game</NavLink></div>
					<div><input type="text" placeholder='Find country / capital' /></div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
