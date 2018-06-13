import React from 'react'
import { connect } from 'react-redux';
import { tableRebuilt } from '../actions'
import { showSaved } from '../actions'



class RebuiltTable extends React.Component{
	constructor(props){
	super(props)
  this.state = {
    selectedIds: []
  }
  this.handleLoad = this.handleLoad.bind(this)
  this.handleSave = this.handleSave.bind(this)
  this.handleSelecting = this.handleSelecting.bind(this)
}

handleLoad(e){
  this.props.dispatch(tableRebuilt())
}

handleSelecting(e){
if(e.currentTarget.checked){
  this.setState({selectedIds: this.state.selectedIds.concat([e.currentTarget.id])})
}
else{
  this.setState({selectedIds: this.state.selectedIds.filter(item => {
    return item !== e.currentTarget.id
})})
}
}

handleSave(e){
  let ids = this.state.selectedIds;
  e.preventDefault();
  this.props.dispatch(showSaved(ids))
}

render(){
  let items = this.props.items.map((item, index) => {
      return <tr key={index} >
        <td><input id={index} type="checkbox" onClick={this.handleSelecting}/></td>
        <td>{item[1]}</td>
        <td>{item[2]}</td>
      </tr>
    })
    return <div><table onLoad={this.handleLoad} className='rebuilt-table' ><tr><td></td><td>Item</td><td>Cost</td></tr>{items}</table><button onClick={this.handleSave}>Save new table with selected rows </button></div>
}
	
}

export default connect()(RebuiltTable)