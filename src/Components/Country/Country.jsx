import React from 'react'
import s from '../../styles/countryBlock.module.scss'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
const Country = () => {
	const { pathname } = useLocation()
	const [allCountries] = useSelector(({ allCountries }) => [allCountries.countries])
	const [countryByCode] = allCountries.filter(c => c.alpha2Code === pathname.substring(pathname.length - 2))
	const validNumber = (num) => {
		return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : '1'
	}

	// const validArr = (arr) => {
	// 	const newArr = 
	// }
	return (
		<div>
			{countryByCode && <div className={s.countryBlock}>
				<div className={s.row}>
					<div><img src={countryByCode.flag} alt="" /></div>
					<div className={s.info}>
						<div>Name: <span>{countryByCode.name}</span></div>
						<div>Capital: <span>{countryByCode.capital}</span></div>
						<div>Region: <span>{countryByCode.region}</span></div>
						<div>Subegion: <span>{countryByCode.subregion}</span></div>
						<div>Population: <span>{validNumber(countryByCode.population)}</span></div>
						<div>Area: <span>{validNumber(countryByCode.area)} km²</span> </div>
						<div>Currency: <span>{countryByCode.currencies.map(c => c.name).join(', ')}</span></div>
						<div>Languages: <span>{countryByCode.languages.map(c => c.name).join(', ')}</span></div>
						<div>Regional blocks: <span>{countryByCode.regionalBlocs.length !== 0 ?
							countryByCode.regionalBlocs.map(c => c.name).join(', ') :
							'None'
						}</span></div>
					</div>
				</div>
			</div>}
		</div>
	)
}

export default Country
