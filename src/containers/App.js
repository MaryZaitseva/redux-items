import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainTable from '../components/MainTable'
import  UndoRedo  from './UndoRedo'
import  AddItem  from './AddItem'
import  AddRow  from './AddRow'
import RebuiltTable from './RebuiltTable'
import SavedTable from '../components/SavedTable'
import Rebuild from './Rebuild'
import '../App.css';

class App extends Component {
  render() {
  	return <div>
  		{this.props.tableShown ? '' : <MainTable items={this.props.items} editingId={this.props.editingId} />}
  		<AddRow />
  		{this.props.addingRow ? <AddItem/> : ''}
      <UndoRedo isUndoDisabled={this.props.isUndoDisabled} isRedoDisabled={this.props.isRedoDisabled}/>
      <Rebuild />
      {this.props.rebuildTable && !this.props.tableShown ? <RebuiltTable items={this.props.items}/> : ''}
      {this.props.rebuiltTableIds.length === 0 ? ' ' : <SavedTable ids = {this.props.rebuiltTableIds} items={this.props.items}/>}
  	</div>
  }
}

function mapStateToProps (state) {
  return {
    items: state.items.present,
    editingId : state.editingId,
    addingRow: state.addingRow,
    isUndoDisabled: state.items.past.length === 0,
    isRedoDisabled: state.items.future.length === 0,
    rebuildTable: state.rebuildTable,
    rebuiltTableIds: state.rebuiltTableIds,
    tableShown: state.tableShown
  }
}

export default connect(mapStateToProps)(App)