import axios from "axios";

const store = []
export const requestAllCountries = async (countries = store) => {
	if (countries.length === 0) {
		try {
			const response = await axios.get('https://restcountries.eu/rest/v2/all')
			return response
		} catch (error) {
			return { status: 0 }
		}
	}
	return store
}

export const requestAllRegions = async () => {
	const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
	try {
		const response = await axios.all(continents.map(c => makeRequest(c)))
		// return response
		console.log(continents.map((c, i) => validResponse(c, response[i].data)));
		return continents.map((c, i) => validResponse(c, response[i].data));
	} catch (error) {
		console.log('problem');
		return { status: 0 }
	}

	function validResponse(continent, data) {
		return { [continent]: data }
	}

	function makeRequest(continent) {
		return axios.get(`https://restcountries.eu/rest/v2/region/${continent}`)
	}

}