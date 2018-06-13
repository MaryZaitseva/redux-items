import { combineReducers } from 'redux'
import { ADD_ITEM, ADD_ROW, ROW_ADDED, DELETE_ROW, START_EDIT, EDIT_ROW, UNDO, REDO, REBUILD_TABLE, TABLE_REBUILT, SHOW_SAVED } from '../actions'

const initialState = {
	items: {
		past: [],
		present: [],
		future: []
	},
	addingRow: false,
	editingId: null, 
	rebuildTable: false,
	rebuiltTableIds: []
}

const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case ADD_ITEM: 
			const present = [...state.items.present, [action.id, action.name, action.cost]]
			return {...state, 
				items: {...state.items, 
					past: [...state.items.past, [...state.items.present]],
					present: present, 
					future: []
					}}
		case ADD_ROW: 
			return {...state, addingRow: true}
		case ROW_ADDED: 
			return {...state, addingRow: false}
		case START_EDIT: 
			return {...state, editingId: action.payload}
		case EDIT_ROW: 
			const presentItemsEdited = state.items.present.map((i, k) =>{
				if (k == action.payload.id) return action.payload.newItem;
				return i;
			});
			return {...state, items: {...state.items, 
				past: [...state.items.past, [...state.items.present]], 
				present: presentItemsEdited, 
				future: []
			}, editingId: null}
		case DELETE_ROW: 
			const presentItemsDeleted = state.items.present.filter((i,k) => k != action.payload);
			return {...state, items: {...state.items, 
				past: [...state.items.past, [...state.items.present]], 
				present: presentItemsDeleted, 
				future: []
			}}
		case UNDO: 
			const lastItem = [...state.items.past[state.items.past.length -1]]
			const past = state.items.past.slice(0, state.items.past.length - 1)
			const future = [[...state.items.present], ...state.items.future]
			return {...state, items: {...state.items, 
				past, 
				present: lastItem,
				future
			}}
		case REDO: 
			return {...state, items: {...state.items, 
				past: [...state.items.past, [...state.items.present]],
				present: [...state.items.future[0]],
				future: state.items.future.slice(1)

			}}
		case REBUILD_TABLE: 
			return {...state, rebuildTable: true}
		case TABLE_REBUILT: 
			return {...state, rebuildTable: false}
		case SHOW_SAVED: 
			return {...state, rebuiltTableIds: [...state.rebuiltTableIds, action.payload]}
		default: 
			return state
	}
}

export default rootReducer