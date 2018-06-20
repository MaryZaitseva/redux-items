import React from 'react';


class ResetTableToEmpty extends React.Component{

	handleClick = () => {
		this.props.onResetToEmptyClick();
	}

	render(){
		return(
			<div>
				<button onClick = {this.handleClick}>Reset Table To Empty</button>
			</div>
		)
	}
}

export default ResetTableToEmpty;


			