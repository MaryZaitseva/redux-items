import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemsList from './ItemsList'
import  AddItem  from './AddItem'
import  AddRow  from './AddRow'
import '../App.css'

class App extends Component {
	
  render() {
  	return <div>
  		<ItemsList items={this.props.items} />
  		<AddRow />
  		{this.props.addingRow ? <AddItem/> : ''}
  	</div>
  }
}

function mapStateToProps (state) {
  return {
    items: state.items, 
    addingRow: state.addingRow
  }
}

export default connect(mapStateToProps)(App)