import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'
import { rowAdded } from '../actions'

const AddItem = ({ dispatch }) => {
	let itemInput, costInput;
	let id = 0;
	return(
		<div>
			<input type="text" ref={node => itemInput = node}/>
			<input type="text" ref={node => costInput = node}/>
			<button onClick = { e=> {
				e.preventDefault();
				if(itemInput.value){
					dispatch(addItem([id++, itemInput.value, costInput.value]));
					dispatch(rowAdded())
					itemInput.value = '';
					costInput.value = ''
				}
			}}>Add Item</button>
		</div>

	)
}

export default connect()(AddItem)