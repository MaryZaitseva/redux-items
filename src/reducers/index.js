import { combineReducers } from 'redux'
import { ADD_ITEM, ADD_ROW, ROW_ADDED, DELETE_ROW, START_EDIT, EDIT_ROW } from '../actions'

const initialState = {
	items: [[ , 'Item', 'Cost']],
	addingRow: false,
	editingId: null
}

const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case ADD_ITEM: 
			return {...state, items: [...state.items, action.payload]}
		case ADD_ROW: 
			return {...state, addingRow: true}
		case ROW_ADDED: 
			return {...state, addingRow: false}
		case START_EDIT: 
			return {...state, editingId: action.payload}
		case EDIT_ROW: 
			return {...state, items: [...state.items.slice(0, action.payload.id),
        state.items[action.payload.id] = action.payload.newItem,
       ...state.items.slice(action.payload.id + 1)], editingId: null}
		case DELETE_ROW: 
			return {...state, items: [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1)]}
		default: 
			return state
	}
}

export default rootReducer