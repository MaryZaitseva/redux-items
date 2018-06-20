import React from 'react';


class EditItem extends React.Component{
	state = { item: {} };

	updateProp = ({ target: { value, name } }) => {
		this.setState({ item: { ...this.state.item, [name]: value } });
	}

	submit = () => {
		const { item } = this.state;

		if (item.name) {
			this.props.onEditClick(this.props.editingId, item);
			this.setState({ item: {} });
		}
	}

	render(){
		return(
		<tr>
			<td>
				<input type='text' name='name' value={this.props.nameValue} onChange={this.updateProp}/>
			</td>
			<td>
				<input type='text' name='cost' value={this.props.costValue} onChange={this.updateProp}/>
			</td>
			<td>
				<button onClick={this.submit}>Edit Item</button>
			</td>
		</tr>
	)
	}
}

export default EditItem;


