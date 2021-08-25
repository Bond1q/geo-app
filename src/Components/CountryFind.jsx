import React, { useState, useMemo } from 'react'
import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import s from '../styles/navbar.module.scss'

function CountryFind() {
	const [value, setValue] = useState('')
	const options = useMemo(() => countryList().getData(), [])
	const url = useHistory()
	const { pathname } = url.location
	const location = useLocation()
	const changeHandler = value => {
		setValue(value)
		url.push('/countries/' + value.value)
	}

	useEffect(() => {
		console.log('useEffect');
		if (!pathname.includes('/countries/')) {
			setValue('')
		}
	}, [location])

	return <Select theme={theme => ({
		...theme,
		colors: {
			...theme.colors,
			primary25: '#7a7d80',
			primary: '#7a7d80',
		},
	})} className={s.find} options={options} value={value} onChange={changeHandler} />
}

export default CountryFind