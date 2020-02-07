import React, {Component} from 'react';
import ReactDOM from 'react-dom';

'use strict';

const e = React.createElement;

class BrickInventory extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}



const domContainer = document.querySelector('#reactEntry');
ReactDOM.render(e(BrickInventory), domContainer);