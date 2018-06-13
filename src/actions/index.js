export const ADD_ITEM = "ADD_ITEM",  
	ADD_ROW = 'ADD_ROW', 
	ROW_ADDED = 'ROW_ADDED',
	START_EDIT = 'START_EDIT',
	EDIT_ROW = 'EDIT_ROW',
	DELETE_ROW = 'DELETE_ROW',
	UNDO = 'UNDO',
	REDO = 'REDO', 
	REBUILD_TABLE = 'REBUILD_TABLE', 
	TABLE_REBUILT = 'TABLE_REBUILTV',
	SHOW_SAVED = 'SHOW_SAVED'

let id = 0;

export function addItem(item){
	return{
		type: ADD_ITEM, 
		id: id++, 
		name: item[1], 
		cost: item[2]
	}
}

export function addRow(){
	return{
	type: ADD_ROW
}
}

export function rowAdded(){
	return{
	type: ROW_ADDED
}
}

export function startEdit(id){
	return{
	type: START_EDIT,
	payload: id
}
}

export function editRow(id, newItem){
	return{
	type: EDIT_ROW,
	payload: {
		'id' : id,
		'newItem' : newItem
}
}
}

export function deleteRow(id){
	return{
	type: DELETE_ROW, 
	payload: id
}
}

export function undo(){
	return{
		type: UNDO
	}
}

export function redo(){
	return{
		type: REDO
	}
}

export function rebuildTable(){
	return{
		type: REBUILD_TABLE
	}
}

export function tableRebuilt(){
	return{
	type: TABLE_REBUILT
}
}

export function showSaved(ids){
	return{
	type: SHOW_SAVED, 
	payload: ids
}
}