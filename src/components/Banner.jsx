import React from "react";
import { IconClock24, IconMapPin, IconShieldCheck } from "@tabler/icons-react";

function Banner() {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="banner-content">
          <div className="banner-content__text">
            <h2>Experience Luxury for Less!</h2>
            <p>Unbeatable Rates on Premium Vehicles</p>
          </div>
          <div className="banner-content__features">
            <div className="feature">
              <IconClock24 size={28} />
              <span>24/7 Support</span>
            </div>
            <div className="feature">
              <IconMapPin size={28} />
              <span>Convenient Locations</span>
            </div>
            <div className="feature">
              <IconShieldCheck size={28} />
              <span>Trusted Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
