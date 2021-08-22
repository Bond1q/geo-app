import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Countries from './Components/Countries/Countries';
import Home from './Components/Home';
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from "react-router";
import Navbar from './Components/Navbar';
import { getAllCountries } from './redux/countries-reducer';
import { getAllRegions } from './redux/regions-reducer';
function App() {
	const dispatch = useDispatch()

	const [count, setCount] = useState(0)
	useEffect(() => {
		window.test = () => setCount(prev => prev + 1)
		dispatch(getAllCountries())
		dispatch(getAllRegions())
	}, [])
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path='/countries' ><Countries /></Route>
				<Route path='/game' ><Countries /></Route>
				<Route path='/' ><Home /></Route>
			</Switch>

		</div>

	);
}

export default App;
