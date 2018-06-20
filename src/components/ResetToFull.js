import React from 'react';


class ResetTableToFull extends React.Component{

	handleClick = () => {
		this.props.onResetToFullClick();
	}

	render(){
		return(
			<div>
				<button onClick = {this.handleClick}>Reset Table To Full</button>
			</div>
		)
	}
}

export default ResetTableToFull;


			