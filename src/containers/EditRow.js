import React from 'react'
import { connect } from 'react-redux'
import { editRow } from '../actions'

const EditRow = ({ dispatch }) => {
let itemInput, costInput;
	return(
		<tr>
			<td><input type="text" ref={node => itemInput = node}/></td>
			<td><input type="text" ref={node => costInput = node}/></td>
			<td><button onClick = { e => {
				e.preventDefault();
				if(itemInput.value){
					dispatch(editRow(e.currentTarget.parentElement.parentElement.id, [ ,itemInput.value, costInput.value]));
				}
			}}>Edit Item</button></td>
		</tr>

	)
}

export default connect()(EditRow)


			