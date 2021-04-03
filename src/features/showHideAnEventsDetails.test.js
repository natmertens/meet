import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('user has not clicked on details button', () => {

    });

    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see the list of upcoming events without any details', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event .expanded-view')).toHaveLength(0);
    });
  });

  let EventWrapper;
  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the main page is open', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    when('the user clicks on a details button for a certain event', () => {
      EventWrapper.find('.event .show-details').simulate('click');
    });

    then('the user should see details for that event', () => {
      expect(EventWrapper.find('.event .expanded-view')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('an event element has been expanded', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.find('.event .show-details').simulate('click');
    });

    when('the user clicks on a hide-details button', () => {
      EventWrapper.find('.event .hide-details').simulate('click');
    });

    then('the user should see the event element without any details', () => {
      expect(EventWrapper.find('.event .expanded-view')).toHaveLength(0);
    });
  });

});