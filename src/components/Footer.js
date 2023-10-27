import React from 'react';
import footerpic from '../images/footer-pic.jpg';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
  return (
    <footer className="footer">
      <img src={footerpic} alt="Little Lemon footer" className="footer-pic" />
      <div className="footer-navigation">
        <p>LITTLE LEMON</p>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/menu">MENU</a></li>
          <li><a href="/reservations">RESERVATIONS</a></li>
          <li><a href="/order-online">ORDER ONLINE</a></li>
          <li><a href="/login">LOGIN</a></li>
        </ul>
      </div>
    <div className="footer-contact">
       <p>CONTACT</p>
      <ul>
        <li><strong>Address:</strong> 1234 Main Street, Chicago, United States</li>
        <li><strong>Phone:</strong> (123) 456-7890</li>
       <li><strong>Email:</strong> <a href="mailto:info@littlelemonrestaurant.com">info@littlelemonrestaurant.com</a></li>
     </ul>
    </div>
    <div className="footer-social">
     <p>CONNECT</p>
     <ul>
       <li><a href="https://www.facebook.com/profile.php?id=100056652893025"><i className="fa fa-facebook"></i></a></li>
       <li><a href="https://www.instagram.com/blisxfulwitch/?next=%2F"><i className="fa fa-instagram"></i></a></li>
       <li><a href="https://twitter.com/fatima7aeed"><i className="fa fa-twitter"></i></a></li>
      </ul>
    </div>
    <div className="footer-copyright">
        © Copyright {new Date().getFullYear()} <a href="https://fatimasaeed.vercel.app/" class="underlined-link">Fatima Saeed</a>. Don't claim as your own.
    </div>
   </footer>
  );
}

export default Footer;