import React from 'react';


const ResetTable = props => {
	return(
		<div>
			<button onClick = { e => {
				e.preventDefault();
				props.onResetClick();
				}}>
				Reset Table 
			</button>
		</div>
	)
}

export default ResetTable;


			