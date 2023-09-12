import React from 'react';
import Nav from './Nav'; // Import the Nav component

function Footer() {
 return (
  <footer>
     <Nav />
     <p>CONTACT</p>
        <p>Address: 1234 Main Street, Chicago, United States</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@littlelemonrestaurant.com</p>
     <p>CONNECT WITH US</p>
     <ul>
        <li><a href="/facebook">Facebook</a></li>
        <li><a href="/instagram">Instagram</a></li>
        <li><a href="/twitter">Twitter</a></li>
     </ul>
    © 2023 Little Lemon Restaurant. All Rights Reserved.
  </footer>
 );
}

export default Footer;

