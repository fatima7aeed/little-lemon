import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials'; 
import About from './components/About';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
    <Router>
      <Nav />
      <Header />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </Router>
    </>
  );
}

export default App;
