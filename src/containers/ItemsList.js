import React from 'react'
import { connect } from 'react-redux';
import DeleteRow from './DeleteRow'
import StartEdit from './StartEdit'
import EditRow from './EditRow'


class ItemsList extends React.Component{
	constructor(props){
	super(props)
}

 mouseOut(e) {
    e.currentTarget.className = ""
    e.currentTarget.lastChild.className = "hidden"
  }
  
  mouseOver(e) {
    e.currentTarget.className = "hovered"
    e.currentTarget.lastChild.className = ""
  }

render(){
console.log(this.props.items)
  let items = this.props.items.map((item, index) => {
    if (parseInt(this.props.editingId) === index){
        return <EditRow editingId = {this.props.editingId}/>
    } else {
      return <tr onMouseOut={(e) => this.mouseOut(e)} onMouseOver={(e) => this.mouseOver(e)} id={index} key={index}><td>{item[1]}</td><td>{item[2]}</td>{item[0] === 0 ? ' ' : <td className = "hidden"><DeleteRow/><StartEdit /></td>}</tr>
    }


})
    return <table className="table">{items}</table>
}
	
}

export default connect()(ItemsList)