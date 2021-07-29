import React, { Component } from 'react';

class Event extends Component {

  state = {
    showDetails: false
  }

  handleShowDetails = () => {
    this.setState({
      showDetails: true
    })
  }

  handleHideDetails = () => {
    this.setState({
      showDetails: false
    })
  }

  render() {

    const { showDetails } = this.state;
    const { event } = this.props;
    const date = new Date(event.start.dateTime.substring(0, 10)).toDateString();
    const time = event.start.dateTime.substring(11, 16);


    return (
      <div className="event">
        {!showDetails
          ? <div className="collapsed-view">
            <h3 className="title">{event.summary}</h3>
            <p className="event-start">{date}, {time}</p>
            <p className="location">{event.location}</p>
            <button className="show-details" class="btn btn-secondary mt-3" onClick={() => this.handleShowDetails()}>Show Details</button>
          </div>

          : <div className="expanded-view">
            <h3 className="title">{event.summary}</h3>
            <p className="event-start">{date}, {time}</p>
            <p className="location">{event.location}</p>
            <h4>About the event:</h4>
            <p className="description">{event.description}</p>
            <button className="hide-details" class="btn btn-secondary mt-3" onClick={() => this.handleHideDetails()}>Hide Details</button>
          </div>}
      </div>


    );
  }
}

export default Event;