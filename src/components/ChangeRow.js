import React from 'react';


class ChangeRow extends React.Component {

	handleDeleteClick = (e) => {
		e.preventDefault();
		let id = e.currentTarget.parentElement.parentElement.id;
		this.props.onDeleteClick(id);
	}

	handleEditClick = (e) => {
		e.preventDefault();
		let id = e.currentTarget.parentElement.parentElement.id;
		this.props.onStartEditClick(id);
	}

	render(){
		return(
			<td className = "hidden">
				<a onClick={this.handleDeleteClick} href="">x</a>
				<a onClick={this.handleEditClick} href="">edit</a>
			</td>
		)
	}
}

export default ChangeRow;
