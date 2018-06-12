import React from 'react'
import { connect } from 'react-redux'
import { deleteRow } from '../actions'

const DeleteRow = ({ dispatch }) => {
	return(
		<a onClick={(e)=>{
			e.preventDefault()
			let id = e.currentTarget.parentElement.parentElement.id
			dispatch(deleteRow(id))
		}} className='delete-item' href="">x</a>
	)
}

export default connect()(DeleteRow)
