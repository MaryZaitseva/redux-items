import React from 'react'
import { connect } from 'react-redux';
import { tableRebuilt } from '../actions'
import { showSaved } from '../actions'



class SavedTable extends React.Component{
	constructor(props){
	super(props)
}



render(){
let ids = this.props.ids[0]; 
let items = this.props.items; 
console.log(ids, items)
let newItems = [];
for(let i=0; i< ids.length; i++){
    newItems.push(items[+ids[i]])

}

  let newItemsShown = newItems.map((item, index) => {
      return <tr key={index} >
        <td>{item[1]}</td>
        <td>{item[2]}</td>
      </tr>
    })
   
    return (<div><table className='table'><tr><td>Item</td><td>Cost</td></tr>{newItemsShown}</table></div>)

}
}


export default connect()(SavedTable)