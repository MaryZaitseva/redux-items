import React from 'react';


const AddItem = props => {

	let itemInput, 
		costInput;

	return(
		<div>
			<input type='text' ref={node => itemInput = node}/>
			<input type='text' ref={node => costInput = node}/>
			<button style={{float: 'left'}} onClick = { e=> {
				e.preventDefault();
				if(itemInput.value){
					props.onAddItemClick([null, itemInput.value, costInput.value])
					itemInput.value = '';
					costInput.value = '';
				}
			}}>Add Item</button>
		</div>
	)
}

export default AddItem;