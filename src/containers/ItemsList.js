import React from 'react'
const ItemsList = props => {
	let items = props.items.map((item, index) => {
		return <div key={index}><p>{item[0]}</p><p>{item[1]}</p></div>
	})
    return <div>{items}</div>
}


export default ItemsList