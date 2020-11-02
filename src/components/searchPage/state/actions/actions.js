import {ADD_CITY_FILTER, ADD_SPORT_FILTER} from './types'

export const addCityFilter = (city,filter)=>{
	console.log("city filter",city,filter)
	return {
		type: ADD_CITY_FILTER,
		data: {
			city,
			filter,
		}
	}
}

export const addSportFilter = (sport,filter) => {
	console.log("sport filter", sport, filter)
	return {
		type: ADD_SPORT_FILTER,
		data: {
			sport,
			filter,
		}
	}
}