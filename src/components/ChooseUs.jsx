import React from "react";
import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Agra Express?</h4>
                <h2>Elevate Your Journey with Us</h2>
                <p>
                  Experience unparalleled service and luxury with Agra Express. 
                  We're committed to providing you with the best vehicles and 
                  service, ensuring your journey is as remarkable as your destination. 
                  From our premium fleet to our dedicated support, we're here to 
                  exceed your expectations at every turn.
                </p>
                <a href="#home">
                  Explore Our Services &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Diverse Fleet Selection</h4>
                    <p>
                      Choose from our wide range of meticulously maintained 
                      vehicles to suit your style and needs for any journey.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Transparent Pricing</h4>
                    <p>
                      Enjoy peace of mind with our clear, upfront pricing. 
                      No hidden fees, just honest value for your money.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>24/7 Premium Support</h4>
                    <p>
                      Our dedicated team is always ready to assist you, 
                      ensuring a smooth and enjoyable experience around the clock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
