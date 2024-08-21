import React from 'react';
import './Testimonial.css';
import founder1 from '../../assets/CEO.jpg';
import founder2 from '../../assets/CO-Founder.jpg';
import founder3 from '../../assets/CFO.jpg';
const testimonials = [
  {
    name: 'Hansraj School',
    feedback: 'Adventure Buddy offers unforgettable adventures with excellent customer service, diverse activities, top-notch safety, and seamless booking. Highly recommend.',
    image: founder1,
  },
  {
    name: 'RNS World',
    feedback: 'Adventure Buddy offers unforgettable adventures with excellent customer service, diverse activities, top-notch safety, and seamless booking. Highly recommend.',
    image: founder2,
  },
  {
    name: 'Alpine School',
    feedback: 'Adventure Buddy offers unforgettable adventures with excellent customer service, diverse activities, top-notch safety, and seamless booking. Highly recommend.',
    image: founder3,
  },
];

function App() {
  return (
    <div className="apps">
      <h1>“Stories<br></br> from<br></br> the<br></br> Trail”</h1>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-quote">“</div>
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-content">
              <h2>{testimonial.name}</h2>
              <p>{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
