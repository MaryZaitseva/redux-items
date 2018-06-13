import { combineReducers } from 'redux'
import { ADD_ITEM, ADD_ROW, ROW_ADDED, DELETE_ROW, START_EDIT, EDIT_ROW } from '../actions'

const initialState = {
	items: [],
	addingRow: false,
	editingId: null
}

const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case ADD_ITEM: 
			return {...state, items: [...state.items, [action.id, action.name, action.cost]]}
		case ADD_ROW: 
			return {...state, addingRow: true}
		case ROW_ADDED: 
			return {...state, addingRow: false}
		case START_EDIT: 
			return {...state, editingId: action.payload}
		case EDIT_ROW: 
			return {...state, 
			items: (state.items.map((i, k) =>{
				if (k == action.payload.id) return action.payload.newItem;
				return i;
			})), editingId: null}
		case DELETE_ROW: 
			return {...state, items: state.items.filter((i,k) => k != action.payload)}
		default: 
			return state
	}
}

export default rootReducer