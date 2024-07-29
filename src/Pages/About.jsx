import React from "react";
import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import PlanTrip from "../components/PlanTrip";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <div className="container">
          <div className="about-main">
            <div className="about-main__text">
              <h2>AGRA EXPRESS: A Story of Innovation, Inspiration and Dedicated Vision</h2>
              <p>
                We are an award-winning company in the field of tourism in India for the Business and Leisure Traveller. Our forward-looking vision and aggressive devotion to complete client-satisfaction at any cost, helps us remain firmly in the forefront of this segment of the rapidly-growing Indian tourism industry. Our business policies are based on integrity and innovative business practices that help us set the benchmarks today.
              </p>
              <p>
                In a short span of a few years, our market base has grown. The spontaneous growth of our fleet has also kept pace, strongly fuelled by the fast-growing demand for our genuinely honest services by an ever-discerning client-base of Inbound Tour Operators in India and Indian Corporate Organisations, alike.
              </p>
              <p>
                It is a heartening and humbling experience for us to note that these business organisations that are strong market leaders in their own fields of endeavour are unanimous in their choice of Agra Express when it comes to selecting a car & coach rental company to cater to the travel needs of their esteemed clients and/or dealers/employees.
              </p>
            </div>
          </div>
          <div className="about-stats">
            <div className="about-stats__box">
              <img src={Box1} alt="car-icon" />
              <span>
                <h4>20</h4>
                <p>Car Types</p>
              </span>
            </div>
            <div className="about-stats__box">
              <img src={Box2} alt="car-icon" />
              <span>
                <h4>85</h4>
                <p>Rental Outlets</p>
              </span>
            </div>
            <div className="about-stats__box">
              <img src={Box3} alt="car-icon" />
              <span>
                <h4>75</h4>
                <p>Repair Shops</p>
              </span>
            </div>
          </div>
          <div className="about-fleet">
            <h3>Our Fleet of Vehicles</h3>
            <p>
              Our large, well-maintained fleet of brand new vehicles, include the latest models and the best names in each class such as the well-known, luxury Volvo & Mercedes coaches (equipped with chemical toilets); Deluxe tourist coaches in the Large, Medium and Mini segments; mini vans such as the luxury Imported Van Luxury Toyota Coaster, Toyota Hiace Commuter & Tempo Traveller, Toyota Innova and various other well-known brands (Mercedes Benz, BMW, Toyota, Honda) of large and medium luxury passenger cars.
            </p>
            <br />
            <br />
            <p>
              All vehicles are equipped with modern amenities and the latest, state-of-the-art facilities that are dedicated to the safety and comfort of our valued passengers. Even the smallest request of our valued passengers is big enough for us to take note of and to comply with immediately. Every vehicle in our large fleet is manned by smart, well-dressed, enthusiastic, well-mannered, knowledgeable, English-speaking Reliable chauffeurs and support staff who are always smiling and eager to please.
            </p>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>9540351000</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
