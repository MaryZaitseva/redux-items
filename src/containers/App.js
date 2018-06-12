import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemsList from './ItemsList'
import  AddItem  from './AddItem'
import  AddRow  from './AddRow'
import '../App.css';

class App extends Component {
	
  render() {
  	return <div>
  		<ItemsList items={this.props.items} editingId={this.props.editingId} />
  		<AddRow />
  		{this.props.addingRow ? <AddItem/> : ''}
  	</div>
  }
}

function mapStateToProps (state) {
  return {
    items: state.items,
    editingId : state.editingId,
    addingRow: state.addingRow
  }
}

export default connect(mapStateToProps)(App)