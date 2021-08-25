import { requestAllCountries } from "../api/api";

const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

const initialState = {
	countries: [],
	isLoading: false,
}

const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_COUNTRIES:
			return { ...state, countries: action.allCountries }
		case TOGGLE_IS_LOADING:
			return { ...state, isLoading: action.isLoading }

		default:
			return state;
	}

}

export const setCountries = (allCountries) => ({ type: 'GET_ALL_COUNTRIES', allCountries })
export const toggleIsLoading = (isLoading) => ({ type: 'TOGGLE_IS_LOADING', isLoading })

export const getAllCountries = () => {

	return async (dispatch) => {
		dispatch(toggleIsLoading(true))
		const r = await requestAllCountries()
		dispatch(toggleIsLoading(false))
		return dispatch(setCountries(r.data))


	}
}

export default countriesReducer