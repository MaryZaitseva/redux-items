import React from 'react'
const ItemsList = props => {
	let items = props.items.map((item, index) => {
		return <tr key={index}><td>{item[0]}</td><td>{item[1]}</td></tr>
	})
    return <table className="table">{items}</table>
}


export default ItemsList