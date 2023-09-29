import React from 'react';
import './About.css';
import adrianPhoto from '../images/Mario and Adrian A.jpg'; // Import the image using relative path
import marioPhoto from '../images/Mario and Adrian b.jpg'; // Import the image using relative path

const About = () => {
  return (
    <div className="about">
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>Little Lemon, owned by the dynamic duo of Mario and Adrian, is a charming restaurant nestled in the heart of Chicago. This culinary gem offers a unique dining experience, blending traditional flavors with modern innovation on a diverse menu. Beyond the delectable dishes, what sets Little Lemon apart is the personal touch and warm hospitality of its owners, making every visit a memorable and satisfying journey for food enthusiasts in the city.</p>
      <div className="photos">
        <img src={adrianPhoto} alt="Adrian" />
        <img src={marioPhoto} alt="Mario" />
      </div>
    </div>
  );
};

export default About;
