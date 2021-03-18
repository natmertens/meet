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

  render() {

    const { showDetails } = this.state;
    const { event } = this.props;

    return (
      <div className="Event">
        {!showDetails
          ? <div className="collapsed-view">
            <h3 className="title">{event.summary}</h3>
            <p className="event-start">{event.start.dateTime}</p>
            <p className="location">{event.location}</p>
            <button className="show-details" onClick={() => this.handleShowDetails()}>Show Details</button>
          </div>

          : <div className="expanded-view">
            <h3 className="title">{event.summary}</h3>
            <p className="event-start">{event.start.dateTime}</p>
            <p className="location">{event.location}</p>
            <p>About event:</p>
            <p><a href="#">See Details on Google Calendar</a></p>
            <p className="description">{event.description}</p>
            <button className="hide-details">Hide Details</button>
          </div>}
      </div>


    );
  }
}

export default Event;