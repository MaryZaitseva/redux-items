import React from 'react';


const EditItem = props => {

	let itemInput, 
		costInput, 
		id = props.editingId;

	return(
		<tr>
			<td>
				<input type="text" ref={node => itemInput = node}/>
			</td>
			<td>
				<input type="text" ref={node => costInput = node}/>
			</td>
			<td>
				<button onClick = { e => {
					e.preventDefault();
					if(itemInput.value){
						props.onEditClick(id, [id, itemInput.value, costInput.value])
					}}}>	
					Edit Item
				</button>
			</td>
		</tr>
	)
}

export default EditItem;


			