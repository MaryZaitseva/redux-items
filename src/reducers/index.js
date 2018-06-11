import { combineReducers } from 'redux'
import { ADD_ITEM } from '../actions'

const initialState = {
	items: [[[123,123]]]
}

const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case ADD_ITEM: 
			return {...state, items: [...state.items, action.payload]}
		default: 
			return state
	}
}

export default rootReducer