import '../styles.css';
import React from 'react';
import { connect } from 'react-redux';
import AddRow from '../components/AddRow';
import AddItem from '../components/AddItem';
import UndoRedo from '../components/UndoRedo';
import MainTable from '../components/MainTable';
import RebuildTable from '../components/RebuildTable';
import RebuiltTable from '../components/RebuiltTable';
import ResetToEmpty from '../components/ResetToEmpty';
import ResetToFull from '../components/ResetToFull';
import {
  undo, redo, 
  rowAdd, 
  itemAdd, itemDelete, itemEdit, itemEditStart,
  tableRebuild, tableSavedShow, tableResetToEmpty, tableResetToFull, 
} from '../redux/actions';


class Home extends React.Component {
  render() {
    const { 
      items, isMainTableShown, isAddingInputOpen, isTableRebuilt, isSavedTableShown, editingId, savedItems,
      isUndoDisabled, isRedoDisabled, onEditClick, onDeleteClick, onStartEditClick, onUndoClick, onRedoClick, 
      onResetToEmptyClick, onResetToFullClick, onAddRowClick, onAddItemClick, onRebuildClick, onTableRebuilt, 
      onShowSaved, 
    } = this.props;

    return (
      <div>
        {
          isMainTableShown && !isTableRebuilt && !isSavedTableShown &&
          <div>
            <MainTable 
            items={items} 
            editingId={editingId} 
            onEditClick={onEditClick} 
            onDeleteClick={onDeleteClick} 
            onStartEditClick={onStartEditClick}/>
          <UndoRedo 
            onUndoClick={onUndoClick} 
            onRedoClick={onRedoClick} 
            isUndoDisabled={isUndoDisabled} 
            isRedoDisabled={isRedoDisabled}/>
          </div>
        }

        {
          (isTableRebuilt || isSavedTableShown) && isMainTableShown &&
            <div>
            <ResetToEmpty onResetToEmptyClick={onResetToEmptyClick}/>
            <ResetToFull onResetToFullClick={onResetToFullClick}/>
          </div>
        }

        {
          !isTableRebuilt && !isAddingInputOpen  && 
          <AddRow onAddRowClick={onAddRowClick} />
        }

        {
          isAddingInputOpen && 
          <AddItem onAddItemClick={onAddItemClick} />
        }

        {
          !!items.length && !isSavedTableShown && !isTableRebuilt &&
          <RebuildTable onRebuildClick={onRebuildClick} />
        }

        {
          isTableRebuilt && !isSavedTableShown &&
          <RebuiltTable 
            items={items} 
            onTableRebuilt={onTableRebuilt} 
            onShowSaved={onShowSaved} />
        }

        {
          isSavedTableShown && 
          <MainTable 
            items={savedItems} 
            editingId={editingId} 
            onEditClick={onEditClick} 
            onDeleteClick={onDeleteClick} 
            onStartEditClick={onStartEditClick}/>
        }
      </div>
    )
  }
}

function mapStateToProps ({
  items, isMainTableShown, isAddingInputOpen, isUndoDisabled,
  isRedoDisabled, isTableRebuilt, isSavedTableShown, editingId, savedItems, }) {
  
  return {
    items: items.present,
    isMainTableShown,
    isAddingInputOpen,
    isUndoDisabled,
    isRedoDisabled,
    isTableRebuilt,
    isSavedTableShown,
    editingId,
    savedItems,
  };
}

const mapDispatchToProps = {
  onUndoClick: undo, 
  onRedoClick: redo, 
  onAddRowClick: rowAdd,
  onAddItemClick: itemAdd,
  onRebuildClick: tableRebuild,
  onEditClick: itemEdit,
  onDeleteClick: itemDelete,
  onShowSaved: tableSavedShow,
  onStartEditClick: itemEditStart,
  onResetToEmptyClick: tableResetToEmpty,
  onResetToFullClick: tableResetToFull,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
