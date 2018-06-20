import React from 'react';


class ChangeRow extends React.Component {

	handleDeleteClick = (e) => {
		
		e.preventDefault();
		const { onDeleteClick, index } = this.props;
		onDeleteClick(index);
	}

	handleEditClick = (e) => {

		e.preventDefault();
		const { onStartEditClick, index } = this.props;
		onStartEditClick(index);
	}

	render() {
		return (
			<td>
				<a onClick={this.handleDeleteClick} href=''>x</a>
				<a onClick={this.handleEditClick} href=''>edit</a>
			</td>
		)
	}
}

export default ChangeRow;