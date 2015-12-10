import React from 'react';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  render() {
    return (
      <div>
        <h1>It works!</h1>
      </div>
    );
  }
}
