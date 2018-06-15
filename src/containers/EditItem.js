import React from 'react'
import { connect } from 'react-redux'
import { editItem } from '../actions'

class EditRow extends React.Component{

render(){

	let itemInput, costInput, id = this.props.editingId;

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
						this.props.dispatch(editItem(id, [id, itemInput.value, costInput.value]));}}}>	
					Edit Item
				</button>
			</td>
		</tr>

	)
}
}

export default connect()(EditRow)


			