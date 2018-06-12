import React from 'react'
import { connect } from 'react-redux'
import { startEdit } from '../actions'

const StartEdit = ({ dispatch }) => {
	return(
		<a className='edit-item' href="" onClick={(e)=>{
			e.preventDefault()
			let id = e.currentTarget.parentElement.parentElement.id
			dispatch(startEdit(id))
		}}>edit</a>

	)
}

export default connect()(StartEdit)