import React, { Component } from 'react';
import NavBar from '../components/navbar';

export default class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}


