import './App.css';
import React from 'react'; 
import 'font-awesome/css/font-awesome.min.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials'; 
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
