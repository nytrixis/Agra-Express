import React from "react";
import { IconCar, IconHeadset, IconMapPin } from "@tabler/icons-react";

function PlanTrip() {
  return (
    <section className="plan-section">
      <div className="container">
        <div className="plan-container">
          <div className="plan-container__title">
            <h3>Your Journey Starts Here</h3>
            <h2 style={{ color: "#d43242" }}>Effortless Car Rental in 3 Simple Steps</h2>
          </div>

          <div className="plan-container__boxes">
            <div className="plan-container__boxes__box">
              <IconCar size={48} stroke={2} color="#d43242"/>
              <h3>Choose Your Ride</h3>
              <p>
                Explore our diverse fleet and find the perfect vehicle for your adventure. From compact cars to luxury SUVs, we've got you covered.
              </p>
            </div>

            <div className="plan-container__boxes__box">
              <IconHeadset size={48} stroke={2} color="#d43242" />
              <h3>Connect with Us</h3>
              <p>
                Our friendly experts are ready to assist you 24/7. Get personalized advice and answers to all your questions for a smooth booking experience.
              </p>
            </div>

            <div className="plan-container__boxes__box">
              <IconMapPin size={48} stroke={2} color="#d43242" />
              <h3>Hit the Road</h3>
              <p>
                Buckle up and embark on your journey! With our top-notch vehicles and support, your trip is bound to be unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanTrip;
