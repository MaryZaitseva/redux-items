import React from 'react';


const UndoRedo = props => {
	return(
		<div>
			<button onClick = { e => {
				e.preventDefault();
				props.onUndoClick()
				}}
				disabled = {props.isUndoDisabled}>
				Undo
			</button>
			<button onClick = { e => {
				e.preventDefault();
				props.onRedoClick()
				}} 
				disabled = {props.isRedoDisabled}>
				Redo
			</button>
		</div>
	)
}

export default UndoRedo;


			