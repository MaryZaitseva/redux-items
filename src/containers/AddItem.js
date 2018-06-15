import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'
import { rowAdded } from '../actions'

const AddItem = ({ dispatch }) => {
	let itemInput, costInput;
	return(
		<div>
			<input type="text" ref={node => itemInput = node} />
			<input type="text" ref={node => costInput = node}/>
			<button onClick = { e=> {
				e.preventDefault();
				if(itemInput.value){
					dispatch(addItem([ null ,itemInput.value, costInput.value]));
					dispatch(rowAdded())
					itemInput.value = '';
					costInput.value = ''
				}
			}}>Add Item</button>
		</div>

	)
}

export default connect()(AddItem)