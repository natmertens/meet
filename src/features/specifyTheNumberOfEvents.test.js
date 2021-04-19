import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyTheNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user has not specified a number, twelve is the default number', ({ given, when, then }) => {
    given('that the user has not specified a number', () => {

    });

    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the default number of events is twelve', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(12);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {

    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when('the user enters a number into the input field', () => {
      AppWrapper.find('.event-number').simulate('change', { target: { value: 1 } })
    });

    then('a list with the specified number of events in that city will be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(1);
    });
  });

});