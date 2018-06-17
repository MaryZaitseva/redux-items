export const
    ADD_ROW = 'ADD_ROW',
    ROW_ADDED = 'ROW_ADDED',
    ADD_ITEM = "ADD_ITEM",
    START_ITEM_EDIT = 'START_ITEM_EDIT',
    EDIT_ITEM = 'EDIT_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    UNDO = 'UNDO',
    REDO = 'REDO',
    REBUILD_TABLE = 'REBUILD_TABLE',
    TABLE_REBUILT = 'TABLE_REBUILT',
    SHOW_SAVED_TABLE = 'SHOW_SAVED_TABLE', 
    TABLE_SHOWN = 'TABLE_SHOWN', 
    RESET_TABLE='RESET_TABLE';

let id = 0;

export function addRow() {
    return {
        type: ADD_ROW
    }
}

export function rowAdded() {
    return {
        type: ROW_ADDED
    }
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        id: id++,
        name: item[1],
        cost: item[2]
    }
}

export function startItemEdit(id) {
    return {
        type: START_ITEM_EDIT,
        payload: id
    }
}

export function editItem(id, newItem) {
    return {
        type: EDIT_ITEM,
        payload: {
            'id': id,
            'newItem': newItem
        }
    }
}

export function deleteRow(id) {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export function undo() {
    return {
        type: UNDO
    }
}

export function redo() {
    return {
        type: REDO
    }
}

export function rebuildTable() {
    return {
        type: REBUILD_TABLE
    }
}

export function tableRebuilt() {
    return {
        type: TABLE_REBUILT
    }
}

export function showSaved(ids) {
    return {
        type: SHOW_SAVED_TABLE,
        payload: ids
    }
}

export function tableShown(){
    return{
        type: TABLE_SHOWN
    }
}

export function resetTable(){
    return{
        type: RESET_TABLE
    }
}