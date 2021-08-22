import { requestAllRegions } from "../api/api";

const GET_ALL_REGIONS = 'GET_ALL_REGIONS'

const initialState = {
	continents: []
}

const regionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_REGIONS:
			return { ...state, continents: action.allRegions }


		default:
			return state;
	}

}

export const setRegions = (allRegions) => ({ type: 'GET_ALL_REGIONS', allRegions })

export const getAllRegions = () => {

	return async (dispatch) => {

		const r = await requestAllRegions()

		return dispatch(setRegions(r))


	}
}

export default regionsReducer