import React from 'react'
import DeleteRow from '../containers/DeleteRow'
import StartItemEdit from '../containers/StartItemEdit'
import EditItem from '../containers/EditItem'


class MainTable extends React.Component{
  
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

  let items = this.props.items.map((item, index) => {
    if (parseInt(this.props.editingId) === index){
        return <EditItem editingId = {this.props.editingId}/>
    } else {
      return <tr onMouseOut={(e) => this.mouseOut(e)} onMouseOver={(e) => this.mouseOver(e)} id={index} key={index}><td>{item[1]}</td>
        <td>{item[2]}</td>
        <td className = "hidden"><DeleteRow/><StartItemEdit /></td>
      </tr>
    }


})
    return <table className="table"><tbody><tr><td>Item</td><td>Cost</td></tr>{items}</tbody></table>
}
	
}

export default MainTable