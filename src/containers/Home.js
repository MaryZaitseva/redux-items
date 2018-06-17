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
import { undo, redo, addRow, addItem, rowAdded, rebuildTable, deleteRow, editItem, tableRebuilt, showSaved, startItemEdit, tableShown, resetTable } from '../redux/actions';


class Home extends React.Component {

    onInputBlur(){
        console.log('blurred')
    }

    render() {
        return (
            <div>
                {this.props.tableShown || this.props.rebuildTable ? '' : 
                    <MainTable 
                        items={this.props.items} 
                        editingId={this.props.editingId} 
                        onEditClick={this.props.onEditClick} 
                        onDeleteClick={this.props.onDeleteClick} 
                        onStartEditClick={this.props.onStartEditClick}/>}
                {this.props.rebuildTable || this.props.tableShown ? ' ' : 
                    <AddRow 
                        onAddRowClick={this.props.onAddRowClick}/>}
                {this.props.addingRow ? 
                    <AddItem
                        onAddItemClick={this.props.onAddItemClick} 
                        onInputBlur={() => {this.onInputBlur()}}/> : ''}
                {this.props.tableShown ? '' : 
                    <UndoRedo 
                        onUndoClick={this.props.onUndoClick} 
                        onRedoClick={this.props.onRedoClick} 
                        isUndoDisabled={this.props.isUndoDisabled} 
                        isRedoDisabled={this.props.isRedoDisabled}/>}
                {this.props.items.length > 0 && !this.props.tableShown && !this.props.rebuildTable ? 
                    <RebuildTable 
                        onRebuildClick={this.props.onRebuildClick}/> : ''}
                {this.props.rebuildTable && !this.props.tableShown ? 
                    <RebuiltTable 
                        items={this.props.items} 
                        onTableRebuilt={this.props.onTableRebuilt} 
                        onShowSaved={this.props.onShowSaved}/> : ''}
                {this.props.rebuiltTableIds.length === 0 ? ' ' : 
                    <div><SavedTable 
                        ids = {this.props.rebuiltTableIds} 
                        items={this.props.items}/>
                    <ResetTable 
                        onResetClick={this.props.onResetClick}/>
                    </div>}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        items: state.items.present,
        editingId : state.editingId,
        addingRow: state.addingRow,
        isUndoDisabled: state.items.past.length === 0 && state.rebuildTable.past.length === 0,
        isRedoDisabled: state.items.future.length === 0 && state.rebuildTable.future.length === 0,
        rebuildTable: state.rebuildTable.present,
        rebuiltTableIds: state.rebuiltTableIds,
        tableShown: state.tableShown
    }
}

function mapDispatchToProps(dispatch){
    return{
        onUndoClick(){
            dispatch(undo());
        },
        onRedoClick(){  
            dispatch(redo());
        }, 
        onAddRowClick(){
            dispatch(addRow());
        }, 
        onAddItemClick(item){
            dispatch(addItem(item));
            dispatch(rowAdded());
        },
        onRebuildClick(){
            dispatch(rebuildTable());
        },
        onEditClick(id, item){
            dispatch(editItem(id, item));
        },
        onDeleteClick(id){
            dispatch(deleteRow(id));
        },
        onTableRebuilt(){
            dispatch(tableRebuilt());
        }, 
        onShowSaved(ids){
            dispatch(showSaved(ids));
        },
        onStartEditClick(id){
            dispatch(startItemEdit(id));
        },
        onTableShown(){
            dispatch(tableShown());
        }, 
        onResetClick(){
            dispatch(resetTable())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);