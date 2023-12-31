// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials'; 
import About from './components/About';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/booking" component={BookingPage} />
        <Route path="/ConfirmedBooking" component={ConfirmedBooking} /> {/* Add this route */}
        {/* Define other routes for different pages */}
      </Switch>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </Router>
  );
}

export default App;
