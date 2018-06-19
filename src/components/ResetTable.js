import React from 'react';


class ResetTable extends React.Component{

	handleClick = () => {
		this.props.onResetClick();
	}

	render(){
		return(
			<div>
				<button onClick = {this.handleClick}>Reset Table</button>
			</div>
		)
	}
}

export default ResetTable;


			