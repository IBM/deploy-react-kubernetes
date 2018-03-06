import React, { PropTypes, Component } from 'react'

class ListItem extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="list-item">
        <ul>
          {list}
        </ul>
    </div>
    );
  }
}

ListItem.PropTypes = {
  list: PropTypes.array,
}

export default ListItem;
