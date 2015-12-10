import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>Homepage</Link>
        <Link to='example'>Example</Link>
      </nav>
    );
  }
}

