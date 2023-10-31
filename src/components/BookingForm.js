// BookingForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function BookingForm({ submitForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const history = useHistory();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      selectedDate,
      selectedTime,
    };

    submitForm(formData);
    history.push('/ConfirmedBooking');
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
        <a
          className="reserve-now"
          href="/ConfirmedBooking"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Reserve Now
        </a>
      </form>
    </div>
  );
}

export default BookingForm;
