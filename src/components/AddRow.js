import React from 'react';


class AddRow extends React.Component{

	handleClick = () => {
		this.props.onAddRowClick();
	}

	render(){
		return(
			<div>
				<button onClick={this.handleClick}>Add Row</button>
			</div>
		)
	}

}

export default AddRow;                     