const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER'

const initialState = {
	filters: ['alphabet', 'continent'],
	activeFilter: 'alphabet'
}

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_FILTER:
			console.log('qq');
			return { ...state, activeFilter: action.filterName }


		default:
			return state;
	}

}

export const setActiveFilter = (filterName) => ({ type: 'SET_ACTIVE_FILTER', filterName })


export default filterReducer