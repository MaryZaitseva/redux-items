import '../styles.css';
import React from 'react';
import { connect } from 'react-redux';
import AddRow from '../components/AddRow';
import AddItem from '../components/AddItem';
import UndoRedo from '../components/UndoRedo';
import MainTable from '../components/MainTable';
import SavedTable from '../components/SavedTable';
import RebuildTable from '../components/RebuildTable';
import RebuiltTable from '../components/RebuiltTable';
import ResetTable from '../components/ResetTable';
import { undo, redo, 
  rowAdd, itemAdd, itemDelete, itemEdit, itemEditStart,
  tableRebuild, tableRebuilt, tableSavedShow, tableReset, } from '../redux/actions';


class Home extends React.Component {

  render() {
    const { isTableShown, isTableReduilding, items, editingId, onEditClick, onDeleteClick, 
      onStartEditClick, onAddRowClick, isRowAdding, onAddItemClick, onUndoClick, onRedoClick, 
      isUndoDisabled, isRedoDisabled, onTableRebuilt, onShowSaved, rebuiltTableIds, onResetClick,
      onRebuildClick,
    } = this.props
    return (
      <div>
        {(isTableShown || isTableReduilding) ||
          <MainTable 
            items={items} 
            editingId={editingId} 
            onEditClick={onEditClick} 
            onDeleteClick={onDeleteClick} 
            onStartEditClick={onStartEditClick}/>}
        {!(isTableReduilding || isTableShown) &&
          <AddRow onAddRowClick={onAddRowClick}/>}
        {isRowAdding &&
          <AddItem onAddItemClick={onAddItemClick}/>}
        {!isTableShown &&
          <UndoRedo 
            onUndoClick={onUndoClick} 
            onRedoClick={onRedoClick} 
            isUndoDisabled={isUndoDisabled} 
            isRedoDisabled={isRedoDisabled}/>}
        {(items.length > 0 && !isTableShown && !isTableReduilding) &&
          <RebuildTable onRebuildClick={onRebuildClick}/>}
        {isTableReduilding && !isTableShown &&
          <RebuiltTable 
            items={items} 
            onTableRebuilt={onTableRebuilt} 
            onShowSaved={onShowSaved}/>}
        {rebuiltTableIds.length > 0 && 
          <div>
            <SavedTable 
              ids = {rebuiltTableIds} 
              items={items}/>
            <ResetTable onResetClick={onResetClick}/>
          </div>}
      </div>
    )
  }
}

function mapStateToProps ({ items, editingId, isRowAdding, isTableReduilding, RebuiltTable, rebuiltTableIds, isTableShown }) {
  return {
    items: items.present,
    editingId,
    isRowAdding,
    isUndoDisabled: items.past.length === 0 && isTableReduilding.past.length === 0,
    isRedoDisabled: items.future.length === 0 && isTableReduilding.future.length === 0,
    isTableReduilding: isTableReduilding.present,
    rebuiltTableIds,
    isTableShown,
  }
}

const mapDispatchToProps = {
  onUndoClick: undo, 
  onRedoClick: redo, 
  onAddRowClick: rowAdd,
  onAddItemClick: itemAdd,
  onRebuildClick: tableRebuild,
  onEditClick: itemEdit,
  onDeleteClick: itemDelete,
  onTableRebuilt: tableRebuilt,
  onShowSaved: tableSavedShow,
  onStartEditClick: itemEditStart,
  onResetClick: tableReset,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

