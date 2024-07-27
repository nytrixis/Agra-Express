import React from "react";
import { IconQuote } from "@tabler/icons-react";
import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-content__title">
            <h4>Client Experiences</h4>
            <h2>What Our Customers Say</h2>
            <p>
              Discover the impact of our service through the words of our valued clients. 
              Their experiences reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-card__content">
                <IconQuote className="quote-icon" />
                <p>
                  "Agra Express exceeded all my expectations. The car was immaculate, 
                  the booking process was smooth, and their customer service was top-notch. 
                  I'll definitely be using their services again!"
                </p>
              </div>
              <div className="testimonial-card__author">
                <div>
                  <h4>Ravi Dubey</h4>
                  <p>New Delhi</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-card__content">
                <IconQuote className="quote-icon" />
                <p>
                  "I was impressed by the range of vehicles Agra Express offers. 
                  The car I rented was perfect for my trip, and the staff were incredibly 
                  helpful throughout the entire process. A five-star experience!"
                </p>
              </div>
              <div className="testimonial-card__author">
                <div>
                  <h4>Devesh Pandey</h4>
                  <p>Uttarakhand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
