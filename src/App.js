import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';
import { Offline } from 'react-detect-offline';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';


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

    this.setState({
      offlineText: 'You are using the app offline so data might not be up-to-date'
    });

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(',').shift();
      return { city, number };
    })
    return data;
  }

  render() {
    const { locations, events } = this.state;
    return (
      <div className="App">
        <Offline>
          <OfflineAlert text={this.state.offlineText} />
        </Offline>
        <h2>Meet App</h2>
        <p>Choose Your Nearest City:</p>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} selectedLocation={this.state.selectedLocation} />
        <h4>Events in Each City</h4>
        <ResponsiveContainer height={400}>
          <ScatterChart
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="category" dataKey="city" name="City" />
            <YAxis type="number" dataKey="number" name="Number of Events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
