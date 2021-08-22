import React from 'react'
import s from '../../styles/countries.module.scss'

function Filter({ name, isActive, changeFilter }) {
	return (
		<div onClick={() => changeFilter(name)} className={isActive ? s.active : undefined + " " + s.filter}>
			{name}
		</div>
	)
}

export default Filter
