import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  })

  test('render Event div', () => {
    expect(EventWrapper.find('.Event')).toHaveLength(1);
  })

  test('render collapsed view container', () => {
    expect(EventWrapper.find('.collapsed-view')).toHaveLength(1);
  });

  test('render contents of collapsed view', () => {
    expect(EventWrapper.find('.collapsed-view').children()).toHaveLength(4);
  });

  test('change showDetails state when show-details button is clicked', () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('render expanded view when show-details button is clicked', () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.find('.expanded-view')).toHaveLength(1);
  });

  test('render contents of expanded view', () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.find('.expanded-view').children()).toHaveLength(7);
  });

  test('render heading with correct name', () => {
    expect(EventWrapper.find('.title').text()).toBe('Learn JavaScript');
  });

  test('render event start with correct name', () => {
    expect(EventWrapper.find('.event-start').text()).toBe('2020-05-19T16:00:00+02:00');
  });

  test('render event location with correct name', () => {
    expect(EventWrapper.find('.location').text()).toBe('London, UK');
  });
});