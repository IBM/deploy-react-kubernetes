import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import '../style/main.css';

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
