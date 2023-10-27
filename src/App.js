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

function App() {
  return (
    <>
      <Router>
        <Nav />
        {/* Define your routes within the Switch component */}
        <Switch>
          {/* Define a route for the booking page */}
          <Route path="/booking" component={BookingPage} />

          {/* Define other routes for different pages */}
          {/* Example: */}
          {/* <Route path="/about" component={About} /> */}
        </Switch>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
      </Router>
    </>
  );
}

export default App;
