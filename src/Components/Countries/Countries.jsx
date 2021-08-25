import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ShortInfo from './ShortInfo'
import s from '../../styles/countries.module.scss'
import Filter from './Filter'
import { setActiveFilter } from '../../redux/filters-reducer'
import ValidContinent from './ValidContinent'
import preloader from '../../img/preloader.gif'

const Countries = React.memo(() => {
	const [countriesInformation, filters, activeFilter, regionsInformation, isLoading] = useSelector(({ allCountries, filters, regions }) => {
		return [allCountries.countries, filters.filters, filters.activeFilter, regions.continents, allCountries.isLoading]
	}

	)
	const dispatch = useDispatch()

	const changeFilter = (filterName) => {
		if (filterName !== activeFilter) dispatch(setActiveFilter(filterName))
	}

	return (
		<div>
			{isLoading ?
				<div className={s.preloader}><img src={preloader} alt="" /></div>
				: <div>
					<div className={s.filters}>
						Sort by:
						{filters.map((f, i) => <Filter changeFilter={changeFilter} isActive={f === activeFilter} name={f} key={i} />)}
					</div>

					{activeFilter === 'alphabet' && <div className={s.countries}>
						{countriesInformation.length > 0 && countriesInformation.map((country, index) => {
							return <ShortInfo id={country.alpha2Code} key={index} flag={country.flag} name={country.name} />
						})}
					</div>}
					{activeFilter === 'continent' &&
						<div className={s.continents}>
							{regionsInformation.map((r, i) => <ValidContinent key={i} continent={Object.keys(r)} countries={Object.values(r)} />)
							}
						</div>
					}
				</div>
			}


		</div>

	)
}
)

export default Countries
