import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: this.props.numberOfEvents
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    });

    const location = this.props.selectedLocation ?
      this.props.selectedLocation :
      'all';

    this.props.updateEvents(location, value);
  }

  render() {

    return (
      <div className="numberOfEvents">
        <p>Number of Events:</p>
        <input
          className="event-number"
          value={this.state.numberOfEvents}
          placeholder="12"
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;