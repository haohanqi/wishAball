import {CHANGE_LANGUAGE} from './actions/type'

const initialState = {
	language:"english"
}

export default (state = initialState, action)=>{
	switch(action.type){
		case CHANGE_LANGUAGE: {
			if(state.language === "chinese"){
				return {
					...state,
					language: "english"
				}
			}else{
				return {
					...state,
					language: "chinese"
				}
			}
		}
	}
	return state
}