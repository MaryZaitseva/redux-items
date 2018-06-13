import React from 'react'
import { connect } from 'react-redux'
import { undo } from '../actions'
import { redo } from '../actions'

class UndoRedo extends React.Component{
	constructor(props){
	super(props)
	}

render(){

	return(
		<div>
			<button onClick = { e => {
				e.preventDefault();
				this.props.dispatch(undo())
			}}
			disabled = {this.props.isUndoDisabled}
			>Undo</button>
			<button onClick = { e => {
				e.preventDefault();
				this.props.dispatch(redo());
			}} disabled = {this.props.isRedoDisabled}>Redo</button>
		</div>

	)
}
}

export default connect()(UndoRedo)


			