import React from 'react';
import ChangeRow from './ChangeRow';
import EditItem from './EditItem';


class MainTable extends React.Component {

  state = { hoverIndex: false }

  mouseOverOut = (index) => {
    this.setState({ hoverIndex: index });
  }

  renderItem(index) {
    const {onDeleteClick, onStartEditClick, items } = this.props;

    return (
      <tr
        onMouseEnter={() => this.mouseOverOut(index)}
        onMouseLeave={() => this.mouseOverOut(false)}
        key={index}
        index={index}
      >
        <td>{items[index][1]}</td>
        <td>{items[index][2]}</td>
        {index === this.state.hoverIndex && <ChangeRow
          index={index}
          onDeleteClick={onDeleteClick}
          onStartEditClick={onStartEditClick}
        />}
      </tr>
    );
  }

  renderItemEdit(index) {
    const { editingId, onEditClick } = this.props;

    return (
      <EditItem
        key={index}
        editingId={editingId}
        onEditClick={onEditClick} />
    );
  }

  render() {
    const { editingId, items } = this.props;

    return (
      <table className="table"><tbody>
        <tr>
          <td>Item</td>
          <td>Cost</td>
        </tr>
        {items.map((item, index) =>
          editingId === index ? this.renderItemEdit(index) : this.renderItem(index)
        )}
      </tbody></table>
    )
  }
}

export default MainTable;