import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory, useLocation } from 'react-router-dom'
const Country = () => {
	let { id } = useParams()
	const { pathname } = useLocation()
	console.log('history:', useHistory())
	console.log('location:', useLocation())
	const [allCountries] = useSelector(({ allCountries }) => [allCountries.countries])

	const [countryByCode] = allCountries.filter(c => c.alpha2Code === pathname.substring(pathname.length - 2))
	console.log(countryByCode);

	return (
		<div>
			<div><img src={countryByCode.flag} alt="" /></div>
			<div>{countryByCode.name}</div>
			<div>{countryByCode.capital}</div>
			<div>{countryByCode.region}</div>
			<div>{countryByCode.area}km²</div>
		</div>
	)
}

export default Country
