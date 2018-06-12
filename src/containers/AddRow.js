import React from 'react'
import { connect } from 'react-redux'
import { addRow } from '../actions'

const AddRow = ({ dispatch }) => {
	return(
		<div>
			<button className='add-row-button' onClick = { e=> {
				e.preventDefault();
				dispatch(addRow());
			}}>Add Row</button>
		</div>

	)
}

export default connect()(AddRow)