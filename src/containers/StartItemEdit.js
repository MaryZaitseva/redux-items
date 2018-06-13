import React from 'react'
import { connect } from 'react-redux'
import { startItemEdit } from '../actions'

const StartItemEdit = ({ dispatch }) => {
	return(
		<a className='edit-item' href="" onClick={(e)=>{
			e.preventDefault()
			let id = e.currentTarget.parentElement.parentElement.id
			dispatch(startItemEdit(id))
		}}>edit</a>

	)
}

export default connect()(StartItemEdit)