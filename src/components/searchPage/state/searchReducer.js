import {ADD_CITY_FILTER,ADD_SPORT_FILTER} from './actions/types'
const initialState = {
	cityFilter:{
		"North York": {
			filter:'',
			active:false
		},
		"Downtown": {
			filter: '',
			active: false
		},
		"Markhum": {
			filter: '',
			active: false
		},
		"Scarborough": {
			filter: '',
			active: false
		},
		"Vaughan": {
			filter: '',
			active: false
		},
		"Richmond Hill": {
			filter: '',
			active: false
		},
		"Newmarket": {
			filter: '',
			active: false
		},
		"Mississauga": {
			filter: '',
			active: false
		},
		"Aurora": {
			filter: '',
			active: false
		},
		"Georgina": {
			filter: '',
			active: false
		},
	},

	sportFilter:{
		"Basketball": {
			filter: '',
			active: false
		},
		"Volleyball": {
			filter: '',
			active: false
		},
		"Soccer": {
			filter: '',
			active: false
		},
		"Football": {
			filter: '',
			active: false
		}, 
		"Hockey":{
			filter: '',
			active: false
		}
	}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case  ADD_CITY_FILTER:{
			const {city,filter} = action.data
			const active = state.cityFilter[`${city}`].active
			const newCityFilter = {
				...state.cityFilter,
				[`${city}`]: {
					filter:filter,
					active: !active
				}
			}

			return {
				...state,
				cityFilter: newCityFilter
			}

		}

		case ADD_SPORT_FILTER: {
			const { sport, filter } = action.data
			const active = state.sportFilter[`${sport}`].active
			console.log('active')
			const newSportFilter = {
				...state.sportFilter,
				[`${sport}`]: {
					filter: filter,
					active: !active
				}
			}

			return {
				...state,
				sportFilter: newSportFilter
			}

		}
	
		default:{
			return state
		}
			
	}

}