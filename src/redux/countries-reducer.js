import { requestAllCountries } from "../api/api";

const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'

const initialState = {
	countries: []
}

const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_COUNTRIES:
			return { ...state, countries: action.allCountries }


		default:
			return state;
	}

}

export const setCountries = (allCountries) => ({ type: 'GET_ALL_COUNTRIES', allCountries })

export const getAllCountries = () => {

	return async (dispatch) => {

		const r = await requestAllCountries()

		return dispatch(setCountries(r.data))


	}
}

export default countriesReducer