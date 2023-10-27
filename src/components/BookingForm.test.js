import { initializeTimes, updateTimes } from './yourUtils'; // Import your utility functions

// Test for initializeTimes
test('initializeTimes should return an array of available times', () => {
  const times = initializeTimes(); // Call the initializeTimes function
  // Replace the expectedTimes array with your expected initial times
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  expect(times).toEqual(expectedTimes); // Compare the result with the expected times
});

// Test for updateTimes
test('updateTimes should return the same times provided in the state', () => {
  const initialState = ['17:00', '18:00', '19:00'];
  const updatedTimes = updateTimes(initialState); // Call the updateTimes function with initialState
  expect(updatedTimes).toEqual(initialState); // Ensure that the result is the same as the initialState
});
