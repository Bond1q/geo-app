import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import regionsReducer from "./regions-reducer";
import countriesReducer from "./countries-reducer";
import filterReducer from "./filters-reducer";
const reducers = combineReducers({
	allCountries: countriesReducer,
	filters: filterReducer,
	regions: regionsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store.getState()

export default store