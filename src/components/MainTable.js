import React from 'react';
import ChangeRow from './ChangeRow';
import EditItem from './EditItem';


class MainTable extends React.Component{

  mouseOut(e) {
    e.currentTarget.className = "";
    e.currentTarget.lastChild.className = "hidden";
  }

  mouseOver(e) {
    e.currentTarget.className = "hovered";
    e.currentTarget.lastChild.className = "";
  }

  render(){
    
    let items = this.props.items.map((item, index) => {

      if (parseInt(this.props.editingId, 10) === index){
        return <EditItem 
          key={index} 
          editingId = {this.props.editingId} 
          onEditClick={this.props.onEditClick}/>
      } 
      else {
        return (
          <tr 
          onMouseOut={(e) => this.mouseOut(e)} 
          onMouseOver={(e) => this.mouseOver(e)} 
          id={index} 
          key={index}>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
            <ChangeRow 
              onDeleteClick={this.props.onDeleteClick} 
              onStartEditClick={this.props.onStartEditClick}/>
          </tr>
        )
      }
    })

    return (
      <table className="table"><tbody>
        <tr>
          <td>Item</td>
          <td>Cost</td>
        </tr>
        {items}
      </tbody></table>
    )
  } 
}

export default MainTable;