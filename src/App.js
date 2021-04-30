import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 12,
    selectedLocation: null,
    offlineText: ''
  }


  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
      if (!navigator.onLine) {
        this.setState({
          offlineText: 'You are using this app offline'
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }


  updateEvents = (location, eventCount) => {
    if (eventCount && eventCount > 0 && eventCount < 33) {
      console.log(eventCount)
      this.setState({
        numberOfEvents: eventCount
      });
    }
    this.setState({
      selectedLocation: location
    });
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events.slice(0, this.state.numberOfEvents) :
        events.filter((event) => event.location === location).slice(0, this.state.numberOfEvents);
      this.setState({
        events: locationEvents
      });
    });
  }

  render() {
    return (
      <div className="App">
        <OfflineAlert text={this.state.offlineText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} selectedLocation={this.state.selectedLocation} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
