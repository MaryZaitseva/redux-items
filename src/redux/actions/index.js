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

export function itemEdit(id, {name, cost}) {
  return {
    type: ITEM_EDIT,
    id, 
    name,
    cost
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

export function tableSavedShow(ids) {
  return {
    type: TABLE_SAVED_SHOW,
    payload: ids
  }
}

export function tableResetToFull(){
  return{
    type: TABLE_RESET_TO_FULL
  }
}

export function tableResetToEmpty(){
  return{
    type: TABLE_RESET_TO_EMPTY
  }
}