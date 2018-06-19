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
} from '../constants';

const initialState = {
	items: {
		past: [],
		present: [],
		future: []
	},
	isTableReduilding: {
		past: [],
		present: false, 
		future: []
	},
	isRowAdding: false,
	editingId: null, 
	rebuiltTableIds: [],	
	isTableShown: false,
}

const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case ITEM_ADD: 
			const present = [...state.items.present, {id: action.id, name: action.name, cost: action.cost }]
			return {...state, 
				items: {...state.items, 
					past: [...state.items.past, [...state.items.present]],
					present: present, 
					future: []
					},
				isRowAdding: false
			}

		case ITEM_EDIT_START: 
			return {...state, editingId: action.payload}

		case ITEM_EDIT: 
			const presentItemsEdited = state.items.present.map((i, k) =>{
				if (k === +action.id) return {id: action.id, name: action.name, cost: action.cost };
				else return i;
				});
			return {...state, 
				items: {...state.items, 
					past: [...state.items.past, [...state.items.present]], 
					present: presentItemsEdited, 
					future: []}, 
				editingId: null
			}

		case ROW_ADD: 
			return {...state, isRowAdding: true}
		case ITEM_DELETE: 
			const presentItemsDeleted = state.items.present.filter((i,k) => k !== +action.payload);
			return {...state, 
				items: {...state.items, 
					past: [...state.items.past, [...state.items.present]], 
					present: presentItemsDeleted, 
					future: []}
			}

		case UNDO: 
			if(state.isTableReduilding.past.length !== 0){
				const lastState = state.isTableReduilding.past[state.isTableReduilding.past.length - 1];
				const past = state.isTableReduilding.past.slice(0, state.isTableReduilding.past.length - 1);
				const future = [state.isTableReduilding.present, ...state.isTableReduilding.future];
				return{...state, 
					isTableReduilding: {...state.isTableReduilding, 
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
			if(state.isTableReduilding.future.length !== 0 ){
				return {...state, 
					isTableReduilding: {...state.isTableReduilding, 
						past: [...state.isTableReduilding.past, state.isTableReduilding.present],
						present: state.isTableReduilding.future[0],
						future: state.isTableReduilding.future.slice(1)
					}
				}
			}
			else{
				return {...state, items: {...state.items, 
					past: [...state.items.past, [...state.items.present]],
					present: state.items.future[0],
					future: state.items.future.slice(1)
				}}
			}	

		case TABLE_REBUILD: 
			return {...state, 
				isTableReduilding: {...state.isTableReduilding, 
					past: [...state.isTableReduilding.past, state.isTableReduilding.present],
					present: true, 
					future: []
				}
			}

		case TABLE_REBUILT: 
			return {...state, 
				isTableReduilding: {...state.isTableReduilding, 
					past: [...state.isTableReduilding.past, state.isTableReduilding.present],
					present: false, 
					future: []
				}
			}
			
		case TABLE_SAVED_SHOW: 
			return {...state, 
				isTableShown: true, 
				rebuiltTableIds: [...state.rebuiltTableIds, action.payload],
			}

		case TABLE_RESET: 
			return initialState;

		default: 
			return state;
	}
}

export default rootReducer;