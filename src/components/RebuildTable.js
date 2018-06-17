import React from 'react';


const RebuildTable = props => {
	return(
		<div>
			<button onClick = { e => {
				e.preventDefault();
				props.onRebuildClick();
			}}>Rebuild Table</button>
		</div>
	)
}

export default RebuildTable;


			