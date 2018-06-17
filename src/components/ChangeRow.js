import React from 'react';


const ChangeRow = props => {
	return(
		<td className = "hidden">
			<a onClick={(e)=>{
				e.preventDefault();
				let id = e.currentTarget.parentElement.parentElement.id;
				props.onDeleteClick(id);
			}} className='delete-item' href="">x</a>
			<a className='edit-item' href="" onClick={(e)=>{
				e.preventDefault();
				let id = e.currentTarget.parentElement.parentElement.id;
				props.onStartEditClick(id);
			}}>edit</a>
		</td>
	)
}

export default ChangeRow;
