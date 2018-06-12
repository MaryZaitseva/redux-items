export const ADD_ITEM = "ADD_ITEM",  
	ADD_ROW = 'ADD_ROW', 
	ROW_ADDED = 'ROW_ADDED',
	START_EDIT = 'START_EDIT',
	EDIT_ROW = 'EDIT_ROW',
	DELETE_ROW = 'DELETE_ROW'


export function addItem(item){
	return{
		type: ADD_ITEM, 
		payload: item
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
	'id': id, 
	'newItem': newItem
}
}
}

export function deleteRow(id){
	return{
	type: DELETE_ROW, 
	payload: id
}
}
