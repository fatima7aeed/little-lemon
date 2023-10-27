import React, { useState } from 'react';

function BookingForm() {
  // Define state variables to store user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Event handlers for input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form data, e.g., send it to a server or perform other actions
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', selectedDate);
    console.log('Time:', selectedTime);
  };

  return (
    <div>
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label htmlFor="date">Select a Date:</label>
          <input type="date" id="date" value={selectedDate} onChange={handleDateChange} required />
        </div>
        <div>
          <label htmlFor="time">Select a Time:</label>
          <select id="time" value={selectedTime} onChange={handleTimeChange} required>
            <option value="" disabled>
              Select a time
            </option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
