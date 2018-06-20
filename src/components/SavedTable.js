import React from 'react';

const SavedTable = props => {

	let ids = props.ids[0];
	let items = props.items;
	let newItems = [];

	for(let i=0; i< ids.length; i++){
		newItems.push(items[+ids[i]])
	}

	let newItemsShown = newItems.map((item, index) => {
		return(
			<tr key={index} >
				<td>{item.name}</td>
				<td>{item.cost}</td>
			</tr>
		)
	})

  return (
  	<div>
    	<table className='saved-table'>
    	<tbody>
	    	<tr>
		    	<td>Item</td>
		    	<td>Cost</td>
	    	</tr>
	    	{newItemsShown}
    	</tbody>
    	</table>
  	</div>
  )
}

export default SavedTable;