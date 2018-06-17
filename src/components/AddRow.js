import React from 'react';


const AddRow = (props) => {
	return(
		<div>
			<button className='add-row-button' onClick = {e => {
				e.preventDefault();
				props.onAddRowClick();
			}}>Add Row</button>
		</div>
	)
}

export default AddRow;                     