import React, { useState } from 'react';
import BookingForm from './BookingForm'; // Import your BookingForm component

function BookingPage() {
  // State to manage the booking form visibility
  const [showForm, setShowForm] = useState(true);

  // Function to toggle the form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <p>Welcome to our booking page. Please select your desired date and time to make a reservation.</p>

      

      {showForm && <BookingForm />}

      <p>Additional information or content can go here.</p>
    </div>
  );
}

export default BookingPage;
