import React from 'react';


class RebuiltTable extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        selectedIds: []
    }
    this.handleSave = this.handleSave.bind(this);
    this.handleSelecting = this.handleSelecting.bind(this);
  }


  handleSelecting(e){
    if(e.currentTarget.checked){
      this.setState({selectedIds: this.state.selectedIds.concat([e.currentTarget.id])});
    }
    else{
      this.setState({selectedIds: this.state.selectedIds.filter(item => {
        return item !== e.currentTarget.id;
      })})
    }
    }

  handleSave(e){
    let ids = this.state.selectedIds;
    this.props.onShowSaved(ids);
  }

  render(){
    let items = this.props.items.map((item, index) => {
      return (
        <tr key={index} >
          <td><input id={index} type='checkbox' onClick={this.handleSelecting}/></td>
          <td>{item.name}</td>
          <td>{item.cost}</td>
        </tr>
      )
    })

    return( 
      <div>
        <table className='rebuilt-table'>
          <tbody>
            <tr>
              <td></td>
              <td>Item</td>
              <td>Cost</td>
            </tr>
            {items}
          </tbody>
        </table>
        <button onClick={this.handleSave}>Save new table with selected rows</button>
      </div>
    )
  }
}

export default RebuiltTable;