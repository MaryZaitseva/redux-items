import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemsList from './ItemsList'
import  AddItem  from './AddItem'

class App extends Component {
	
  render() {
  	return <div><ItemsList items={this.props.items}/>
  	<AddItem/>
  	</div>
  }
}

function mapStateToProps (state) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(App)