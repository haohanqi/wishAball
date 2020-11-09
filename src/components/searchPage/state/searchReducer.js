import { ADD_CITY_FILTER, ADD_SPORT_FILTER, SET_CATE, SET_RESULT, SHOW_RESULT} from './actions/types'
const initialState = {
	cityFilter:{
		"North York": {
			filter:'',
			active:false
		},
		"Toronto": {
			filter: '',
			active: false
		},
		"Markham": {
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
		"Hocky":{
			filter: '',
			active: false
		}
	},

	cate:"",
	result:[],
	markers:[],
	showResult:false
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
			// console.log('active')
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

		case SET_CATE: {
			const {cate} = action.data
			return {
				...state,
				cate:cate
			}
		}

		case SET_RESULT:{
			const {result} = action.data
			let newMarkers = []
			
			result.forEach(item => {
				let markerItem = {
					title: "",
					coAddress: {},
					address:"",
					website:""
				}
				markerItem.title=item.organization
				markerItem.coAddress=item.coAddress
				markerItem.address=item.address
				markerItem.website = item.website
				newMarkers.push(markerItem)
			});
			return {
				...state,
				result:result,
				markers:newMarkers
			}
		}

		case SHOW_RESULT:{
			const { show } = action.data
			// console.log("rrrrrrrRshow",show)
			return {
				...state,
				showResult:show
			}
		}
	
		default:{
			return state
		}
			
	}

}