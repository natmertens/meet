import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    query: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      query: value
    })
  }

  render() {

    return (
      <div>
        <input
          className="event-number"
          value={this.state.query}
          placeholder="32"
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;