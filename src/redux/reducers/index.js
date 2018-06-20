import {
	ITEM_ADD, 
	ITEM_EDIT_START,
	ITEM_EDIT, 
	ITEM_DELETE,

	ROW_ADD, 
	
	TABLE_REBUILD,
	TABLE_SAVED_SHOW,
	TABLE_RESET_TO_FULL,
	TABLE_RESET_TO_EMPTY,

	UNDO, 
	REDO,
} from '../constants';

const initialState = {
	items: {
		past: [],
		present: [],
		future: [],
	},
	isMainTableShown: true,
	isAddingInputOpen: false, 
	isTableRebuilt: false, 
	isSavedTableShown: false, 
	editingId: null, 
	savedItems: null, 
  isUndoDisabled: true, 
  isRedoDisabled: true,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ITEM_ADD: 
			const present = [...state.items.present, {id: action.id, name: action.name, cost: action.cost }];

			return {
				...state, 
				items: {
					...state.items, 
					past: [...state.items.past, [...state.items.present]],
					present: present, 
					future: [],
				},
				isAddingInputOpen: false,
        isUndoDisabled: false,
			};

		case ITEM_EDIT_START: 
			return { ...state, editingId: action.payload };

		case ITEM_EDIT: 
			const presentItemsEdited = state.items.present.map((i, k) => {
				if (k === +action.id) {
					return {id: action.id, name: action.name, cost: action.cost };
				} else {
				 return i;
				}
			});

			return {...state, 
				items: {...state.items, 
					past: [...state.items.past, [...state.items.present]], 
					present: presentItemsEdited, 
					future: [],
				}, 
				editingId: null,
			};

		case ROW_ADD: 
			return { ...state, isAddingInputOpen: true };

		case ITEM_DELETE: 
			const presentItemsDeleted = state.items.present.filter((i,k) => k !== +action.payload);

			return {
        ...state, 
				items: {...state.items, 
					past: [...state.items.past, [...state.items.present]], 
					present: presentItemsDeleted, 
					future: [],
				},
			};

		case UNDO: 			
			const lastItem = [...state.items.past[state.items.past.length -1]];
			const past = state.items.past.slice(0, state.items.past.length - 1);
			const future = [[...state.items.present], ...state.items.future];
			return {
        ...state, 
				items: {
          ...state.items, 
					past, 
					present: lastItem,
					future,
				},
        isUndoDisabled: state.items.past.length === 0,
        isRedoDisabled: state.items.past.length === 0,
			};

		case REDO: 
			return {
        ...state, 
				items: {
          ...state.items, 
					past: [...state.items.past, [...state.items.present]],
					present: state.items.future[0],
					future: state.items.future.slice(1),
				},
        isUndoDisabled: state.items.past.length === 0,
        isRedoDisabled: state.items.past.length === 0,
			};
			

		case TABLE_REBUILD: 
			return { ...state, isTableRebuilt: true };
			
		case TABLE_SAVED_SHOW:
			let rebuiltTableIds = action.payload;
			let savedItems = rebuiltTableIds.map((id, index) => state.items.present[id]);

			return {...initialState, 
				items: {
					past: [],
					present: savedItems, 
					future: [],
				},
			};

		case TABLE_RESET_TO_EMPTY: 
			return initialState;

		case TABLE_RESET_TO_FULL: 
			return {
        ...state, 
				isTableRebuilt: false,
				isSavedTableShown: false,
				isMainTableShown: true,
			};

		default: 
			return state;
	}
};

export default rootReducer;