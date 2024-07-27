import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";
import { IconCar, IconPhone, IconStar } from "@tabler/icons-react";

function Models() {
  return (
    <>
    <div className="models-container">
      <section className="models-section">
        <div className="container">
          <div className="models-header">
            <h1 className="models-title">Our Rental Fleet</h1>
            <p className="models-subtitle">Choose from a variety of our amazing Coach Models</p>
          </div>
          <h2 className="models-category">Mini Vans</h2>
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Audi A1</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$45</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Golf 6</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$37</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; VW
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Toyota</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$30</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Camry
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BMW 320</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$35</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg5} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Mercedes</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$50</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Benz GLK
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg6} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>VW Passat</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$25</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; ComfortLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="models-category">Mini Coaches</h2>
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Audi A1</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$45</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Golf 6</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$37</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; VW
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Toyota</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$30</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Camry
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BMW 320</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$35</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg5} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Mercedes</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$50</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Benz GLK
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg6} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>VW Passat</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$25</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; ComfortLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="models-category">Large Coaches</h2>
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Audi A1</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$45</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Golf 6</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$37</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; VW
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Toyota</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$30</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Camry
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BMW 320</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$35</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg5} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Mercedes</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$50</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Benz GLK
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg6} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>VW Passat</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$25</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; ComfortLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="models-category">Luxury Vans</h2>
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Audi A1</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$45</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Golf 6</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$37</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; VW
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Toyota</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$30</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Camry
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BMW 320</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$35</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg5} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Mercedes</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$50</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Benz GLK
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg6} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>VW Passat</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$25</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; ComfortLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

export default Models;
