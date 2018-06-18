export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_EDIT_START = 'ITEM_EDIT_START';
export const ITEM_EDIT = 'ITEM_EDIT';
export const ITEM_DELETE = 'ITEM_DELETE';

export const ROW_ADD = 'ROW_ADD';
export const ROW_ADDED = 'ROW_ADDED';

export const TABLE_REBUILD = 'TABLE_REBUILD';
export const TABLE_REBUILT = 'TABLE_REBUILT';
export const TABLE_SAVED_SHOW = 'TABLE_SAVED_SHOW';
export const TABLE_RESET = 'TABLE_RESET';
export const TABLE_SHOWN = 'TABLE_SHOWN';

export const UNDO = 'UNDO';
export const REDO = 'REDO';

let id = 0;

export function itemAdd({name, cost}) {
    return {
        type: ITEM_ADD,
        id: id++,
        name,
        cost
    }
}

export function itemEditStart(id) {
    return {
        type: ITEM_EDIT_START,
        payload: id
    }
}

export function itemEdit(id, newItem) {
    return {
        type: ITEM_EDIT,
        payload: {
            'id': id,
            'newItem': newItem
        }
    }
}

export function itemDelete(id) {
    return {
        type: ITEM_DELETE,
        payload: id
    }
}

export function rowAdd() {
    return {
        type: ROW_ADD
    }
}

export function rowAdded() {
    return {
        type: ROW_ADDED
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

export function tableRebuild() {
    return {
        type: TABLE_REBUILD
    }
}

export function tableRebuilt() {
    return {
        type: TABLE_REBUILT
    }
}

export function tableSavedShow(ids) {
    return {
        type: TABLE_SAVED_SHOW,
        payload: ids
    }
}

export function tableShown(){
    return{
        type: TABLE_SHOWN
    }
}

export function tableReset(){
    return{
        type: TABLE_RESET
    }
}