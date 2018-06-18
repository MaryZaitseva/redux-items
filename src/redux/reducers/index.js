import {
	ITEM_ADD, 
	ITEM_EDIT_START,
	ITEM_EDIT, 
	ITEM_DELETE,

	ROW_ADD, 
	
	TABLE_REBUILD,
	TABLE_REBUILT,
	TABLE_SAVED_SHOW,
	TABLE_RESET,

	UNDO, 
	REDO,
} from '../actions';

const initialState = {
	items: {
		past: [],
		present: [],
		future: []
	},
	rebuildTable: {
		past: [],
		present: false, 
		future: []
	},
	addingRow: false,
	editingId: false, 
	rebuiltTableIds: [],	
	tableShown: false,
}

const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case ITEM_ADD: 
			const present = [...state.items.present, [action.id, action.name, action.cost]]
			return {...state, 
				items: {...state.items, 
					past: [...state.items.past, [...state.items.present]],
					present: present, 
					future: []
					},
				addingRow: false
			}

		case ITEM_EDIT_START: 
			return {...state, editingId: action.payload}

		case ITEM_EDIT: 
			const presentItemsEdited = state.items.present.map((i, k) =>{
				if (k === +action.payload.id) return action.payload.newItem;
					return i;
				});
			return {...state, 
				items: {...state.items, 
					past: [...state.items.past, [...state.items.present]], 
					present: presentItemsEdited, 
					future: []}, 
				editingId: null
			}

		case ROW_ADD: 
			return {...state, addingRow: true}
		case ITEM_DELETE: 
			const presentItemsDeleted = state.items.present.filter((i,k) => k !== +action.payload);
			return {...state, 
				items: {...state.items, 
					past: [...state.items.past, [...state.items.present]], 
					present: presentItemsDeleted, 
					future: []}
			}

		case UNDO: 
			if(state.rebuildTable.past.length !== 0){
				const lastState = state.rebuildTable.past[state.rebuildTable.past.length - 1];
				const past = state.rebuildTable.past.slice(0, state.rebuildTable.past.length - 1);
				const future = [state.rebuildTable.present, ...state.rebuildTable.future];
				return{...state, 
					rebuildTable: {...state.rebuildTable, 
						past,
						present: lastState,
						future
					}
				}
			}else{
				const lastItem = [...state.items.past[state.items.past.length -1]]
				const past = state.items.past.slice(0, state.items.past.length - 1)
				const future = [[...state.items.present], ...state.items.future]
				return {...state, 
					items: {...state.items, 
						past, 
						present: lastItem,
						future
					}
				}
			}		

		case REDO: 
			if(state.rebuildTable.future.length !== 0 ){
				return {...state, 
					rebuildTable: {...state.rebuildTable, 
						past: [...state.rebuildTable.past, state.rebuildTable.present],
						present: state.rebuildTable.future[0],
						future: state.rebuildTable.future.slice(1)
					}
				}
			}else{
				return {...state, items: {...state.items, 
					past: [...state.items.past, [...state.items.present]],
					present: state.items.future[0],
					future: state.items.future.slice(1)
				}}
			}	

		case TABLE_REBUILD: 
			return {...state, 
				rebuildTable: {...state.rebuildTable, 
					past: [...state.rebuildTable.past, state.rebuildTable.present],
					present: true, 
					future: []
				}
			}

		case TABLE_REBUILT: 
			return {...state, 
				rebuildTable: {...state.rebuildTable, 
					past: [...state.rebuildTable.past, state.rebuildTable.present],
					present: false, 
					future: []
				}
			}
		case TABLE_SAVED_SHOW: 
			return {...state, 
				tableShown: true, 
				rebuiltTableIds: [...state.rebuiltTableIds, action.payload],

			}

		case TABLE_RESET: 
			return initialState;

		default: 
			return state;
	}
}

export default rootReducer;