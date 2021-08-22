import React from 'react'
import ShortInfo from './ShortInfo'
import s from '../../styles/countries.module.scss'

const ValidContinent = ({ continent, countries }) => {
	return (
		<div className={s.validContinent}>
			<div className={s.nameContinent}>{continent[0]}</div>
			<div className={s.countries}>			{countries[0].map((country, index) => {
				return <ShortInfo id={country.alpha2Code} key={index} flag={country.flag} name={country.name} />
			})}</div>
		</div>
	)
}

export default ValidContinent