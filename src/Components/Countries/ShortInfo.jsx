import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../../styles/countries.module.scss'
const ShortInfo = ({ flag, name, id }) => {
	return (
		<div onClick={() => console.log(id)} className={s.shortInfo}>
			<NavLink to={`/countries/${id}`}>
				<img src={flag} alt="" />
				<div className={s.name}>{name}</div>
			</NavLink>
		</div>
	)
}

export default ShortInfo
