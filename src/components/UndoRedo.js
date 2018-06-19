import React from 'react';


class UndoRedo extends React.Component{

	handleUndoClick = () => {
		this.props.onUndoClick();
	}

	handleRedoClick = () => {
		this.props.onRedoClick();
	}

	render(){
		return(
			<div>
				<button 
					onClick = {this.handleUndoClick}
					disabled = {this.props.isUndoDisabled}>
					Undo
				</button>

				<button 
					onClick = {this.handleRedoClick} 
					disabled = {this.props.isRedoDisabled}>
					Redo
				</button>
			</div>
		)
	}
}

export default UndoRedo;


			