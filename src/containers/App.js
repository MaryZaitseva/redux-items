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
import io from "socket.io-client"

class App extends Component {
  constructor(props){
    super(props)
    let socket = io.connect("http://localhost:5000")
    console.dir(socket)
  }
  render() {
  	return <div>
  		{this.props.tableShown ? '' : <MainTable items={this.props.items} editingId={this.props.editingId} />}

  		{this.props.rebuildTable || this.props.tableShown ? ' ' : <AddRow />}
  		{this.props.addingRow ? <AddItem/> : ''}

      {!this.props.rebuildTable && !this.props.tableShown ? <UndoRedo isUndoDisabled={this.props.isUndoDisabled} isRedoDisabled={this.props.isRedoDisabled}/> : ''}

      {this.props.items.length > 0 && !this.props.tableShown && !this.props.rebuildTable ? <Rebuild /> : ''}
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