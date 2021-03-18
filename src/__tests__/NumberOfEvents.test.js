import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents />', () => {

  let NumberOfEventsWrapper, events;
  beforeAll(() => {
    events = mockData;
    NumberOfEventsWrapper = shallow(<NumberOfEvents events={events} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.event-number')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const query = NumberOfEventsWrapper.state('query');
    expect(NumberOfEventsWrapper.find('.event-number').prop('value')).toBe(query);
  });

  test('change state when text input changes', () => {
    const eventObject = { target: { value: 2 } };
    NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('query')).toBe(2);
  });

  test('render default number 32 correctly', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.state('query')).toBe(32);
  });

});