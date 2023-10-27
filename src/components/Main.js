import React, { useState, useReducer } from 'react';
import BookingForm from '../components/BookingForm';

// Define a reducer function to manage availableTimes state
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // You can implement logic here to update availableTimes based on the selected date
      return action.updatedTimes;
    default:
      return state;
  }
};

function Main() {
  // Initialize availableTimes using the reducer
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  // Function to initialize availableTimes (you can customize this)
  function initializeTimes() {
    return [
      '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];
  }

  // Function to handle state change based on the selected date
  function updateTimes(newDate) {
    // You can implement logic here to update availableTimes based on the newDate
    // For now, return the same times as the initial state
    const updatedTimes = initializeTimes();
    return updatedTimes;
  }

  return (
    <div>
      <h1>Welcome to Little Lemon Restaurant</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      {/* Other content */}
    </div>
  );
}

export default Main;
