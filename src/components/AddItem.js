import React from 'react';


class AddItem extends React.Component {
	state = { item: {} };

	updateProp = ({ target: { value, name } }) => {
	this.setState({ item: { ...this.state.item, [name]: value } });
	}

	submit = () => {
		const { item } = this.state;

		if (item.name && (item.cost || item.cost === 0)) {
			this.props.onAddItemClick(item);
			this.setState({ item: {} });
		}
	}

	render() {
		return (
			<div>
				<input type="text" name="name" onChange={this.updateProp} />
				<input type="text" name="cost" onChange={this.updateProp} />
				<button style={{ float: 'left' }} onClick={this.submit}>Add Item</button>
			</div>
		);
	}
}

export default AddItem;