import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    /*numberOfEvents: this.props.numberOfEvents,*/
    errorText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

    this.setState({
      /*numberOfEvents: value,*/
      errorText: ''
    });

    if (value < 1 || value > 32) {
      this.setState({
        errorText: 'Please select a number between 1 and 32'
      });
    }

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
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;