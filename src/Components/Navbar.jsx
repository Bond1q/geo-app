import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<div className="navbar">
				<div><NavLink to='/countries' >Countries</NavLink></div>
				<div><NavLink to='/game' >game</NavLink></div>
				<div><input type="text" placeholder='Find country/capital' /></div>
			</div>
		</div>
	)
}

export default Navbar
