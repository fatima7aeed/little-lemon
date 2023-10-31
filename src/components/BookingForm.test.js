import { initializeTimes, updateTimes } from './yourUtils'; // Import your utility functions

// Test for initializeTimes
test('initializeTimes should return an array of available times', () => {
  // Mock the fetchAPI function to return a non-empty array of available times
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: () => Promise.resolve(['10:00', '12:00', '14:00', '16:00']),
  });

  return initializeTimes().then((times) => {
    const expectedTimes = ['10:00', '12:00', '14:00', '16:00'];
    expect(times).toEqual(expectedTimes); // Compare the result with the expected times
  });
});

// Test for updateTimes
test('updateTimes should return the same times provided in the state', () => {
  const initialState = ['17:00', '18:00', '19:00'];
  const updatedTimes = updateTimes(initialState); // Call the updateTimes function with initialState
  expect(updatedTimes).toEqual(initialState); // Ensure that the result is the same as the initialState
});
