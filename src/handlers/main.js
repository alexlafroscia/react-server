import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <Link to='example'>Link to example</Link>
        {this.props.children}
      </div>
    );
  }
}

