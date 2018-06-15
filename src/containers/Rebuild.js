import React from 'react'
import { connect } from 'react-redux'
import { rebuildTable } from '../actions'

class Rebuild extends React.Component{


render(){
	return(
		<div>
			<button onClick = { e => {
				e.preventDefault();
				this.props.dispatch(rebuildTable())
			}}>Rebuild Table</button>
			
		</div>

	)
}
}

export default connect()(Rebuild)


			