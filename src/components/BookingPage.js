import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  // State to manage the booking form visibility
  const [showForm, setShowForm] = useState(true);

  // Function to toggle the form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Function to handle form submission
  const submitForm = (formData) => {
    // Handle form submission logic, e.g., API call
    console.log('Form data:', formData);
    // If successful, you can navigate to the confirmation page here
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <p>Welcome to our booking page. Please select your desired date and time to make a reservation.</p>

      {showForm && <BookingForm submitForm={submitForm} />} {/* Pass the submitForm function */}
      
      <p>Additional information or content can go here.</p>
    </div>
  );
}

export default BookingPage;
