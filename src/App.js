import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Countries from './Components/Countries/Countries';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		window.test = () => setCount(prev => prev + 1)
	}, [])
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path='/countries' render={Countries} />
				<Route path='/game' render={Countries} />
				<Route path='/' render={Home} />
			</Switch>

		</div>
	);
}

export default App;
