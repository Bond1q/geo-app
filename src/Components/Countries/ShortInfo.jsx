import React from 'react'
import s from '../../styles/countries.module.scss'
const ShortInfo = ({ flag, name }) => {
	return (
		<div className={s.shortInfo}>
			<img src={flag} alt="" />
			<div className={s.name}>{name}</div>
		</div>
	)
}

export default ShortInfo
