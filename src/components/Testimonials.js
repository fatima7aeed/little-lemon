import React from 'react';
import './Testimonials.css';
import brightImage from '../images/bright.webp';
import winImage from '../images/win.jpg';
import eunwooImage from '../images/eunwoo.jpg';
import vImage from '../images/v.jpg';

const testimonialsData = [
  {
    id: 1,
    user: 'Bright Vachirawit',
    rating: 5,
    photoUrl: brightImage, // Use the imported image variable
    review: "Little Lemon Restaurant is fantastic! I love their food, and the service is top-notch."
  },
  {
    id: 2,
    user: 'Metawin Opas-iamkajorn',
    rating: 4,
    photoUrl: winImage, // Use the imported image variable
    review: "I had a wonderful dining experience at Little Lemon. The ambiance and food quality are impressive."
  },
  {
    id: 3,
    user: 'Cha Eun-Woo',
    rating: 5,
    photoUrl: eunwooImage, // Use the imported image variable
    review: "I keep coming back to Little Lemon for their delicious dishes. Highly recommended!"
  },
  {
    id: 4,
    user: 'Kim Taehyung',
    rating: 4,
    photoUrl: vImage, // Use the imported image variable
    review: "Great place for a family dinner. Little Lemon has a diverse menu that everyone can enjoy."
  },
];

function Testimonials() {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="user-info">
              <img src={testimonial.photoUrl} alt={testimonial.user} />
              <div>
                <h3>{testimonial.user}</h3>
                <div className="star-rating">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span key={index}>&#9733;</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
