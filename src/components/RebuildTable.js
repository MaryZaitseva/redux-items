import React from 'react';


class RebuildTable extends React.Component{
	
	handleClick = () => {
		this.props.onRebuildClick();
	}

	render(){

		return(
			<div>
				<button onClick = {this.handleClick}>Rebuild Table</button>
			</div>
		)
	}
}

export default RebuildTable;


			