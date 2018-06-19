import '../App.css';
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
    return (
      <div>
        {this.props.isTableShown || this.props.isTableReduilding ||
          <MainTable 
            items={this.props.items} 
            editingId={this.props.editingId} 
            onEditClick={this.props.onEditClick} 
            onDeleteClick={this.props.onDeleteClick} 
            onStartEditClick={this.props.onStartEditClick}/>}
        {this.props.isTableReduilding || this.props.isTableShown || 
          <AddRow onAddRowClick={this.props.onAddRowClick}/>}
        {this.props.isRowAdding &&
          <AddItem onAddItemClick={this.props.onAddItemClick}/>}
        {!this.props.isTableShown &&
          <UndoRedo 
            onUndoClick={this.props.onUndoClick} 
            onRedoClick={this.props.onRedoClick} 
            isUndoDisabled={this.props.isUndoDisabled} 
            isRedoDisabled={this.props.isRedoDisabled}/>}
        {this.props.items.length > 0 && !this.props.isTableShown && !this.props.isTableReduilding &&
          <RebuildTable onRebuildClick={this.props.onRebuildClick}/>}
        {this.props.isTableReduilding && !this.props.isTableShown &&
          <RebuiltTable 
            items={this.props.items} 
            onTableRebuilt={this.props.onTableRebuilt} 
            onShowSaved={this.props.onShowSaved}/>}
        {this.props.rebuiltTableIds.length > 0 && 
          <div>
            <SavedTable 
              ids = {this.props.rebuiltTableIds} 
              items={this.props.items}/>
            <ResetTable onResetClick={this.props.onResetClick}/>
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

