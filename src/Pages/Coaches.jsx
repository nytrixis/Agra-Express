import React from "react";
import Footer from "../components/Footer";
import CarImg1 from "../images/cars-big/mvolkswagencrafter.jpg";
import CarImg2 from "../images/cars-big/mtoyotahiAce.jpg";
import CarImg3 from "../images/cars-big/mmercedezbenzsprinter.jpg";
import CarImg4 from "../images/cars-big/mmercedezbenzsprinter1.jpg";
import CarImg5 from "../images/cars-big/mnissanurvan.jpg";
import CarImg6 from "../images/cars-big/mmercedezbenzsprinter2.jpg";
import CarImg7 from "../images/cars-big/mmercedezbenzsprinter3.jpg";
import CarImg8 from "../images/cars-big/mvolvocoach.jpg";
import CarImg9 from "../images/cars-big/mkinglongcoach.jpg";
import CarImg10 from "../images/cars-big/ltoyotacoaster.jpg";
import CarImg11 from "../images/cars-big/minicoach.jpg";
import CarImg12 from "../images/cars-big/lbharatbenztouristcoach.jpg";
import CarImg13 from "../images/cars-big/eyutong.jpg";
import CarImg14 from "../images/cars-big/etatastarbusultra.jpg";
import CarImg15 from "../images/cars-big/egoldendragon.jpg";
import { Link } from "react-router-dom";
import { IconCar, IconStar, IconUsers } from "@tabler/icons-react";

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
                      <p>Volkswagen</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      Crafter
                    </span>
                    <span style={{ textAlign: "right" }}>
                      15-20 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Manual
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
                      <p>Toyota</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      HiAce
                    </span>
                    <span style={{ textAlign: "right" }}>
                      10-14 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Manual
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
                      <p>Mercedez Benz</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      Sprinter
                    </span>
                    <span style={{ textAlign: "right" }}>
                      15-20 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Manual
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
                      <p>Mercedez Benz</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      Experience Explorers
                    </span>
                    <span style={{ textAlign: "right" }}>
                      15-20 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Manual
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
                      <p>Nissan</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      Urvan
                    </span>
                    <span style={{ textAlign: "right" }}>
                      12-15 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Manual
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
                      <p>Mercedez Benz</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      S Class
                    </span>
                    <span style={{ textAlign: "right" }}>
                      9-10 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Automatic
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
                <img src={CarImg7} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Mercedez Benz</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      Sprinter Minibus
                    </span>
                    <span style={{ textAlign: "right" }}>
                      16-21 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Automatic
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
                <img src={CarImg10} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Toyota</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      Coaster
                    </span>
                    <span style={{ textAlign: "right" }}>
                      23-30 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Automatic
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
                <img src={CarImg11} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Volkswagen</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      Crafter Minibus
                    </span>
                    <span style={{ textAlign: "right" }}>
                      16-20 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Manual
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
                <img src={CarImg8} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Volvo</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      B11R Coach
                    </span>
                    <span style={{ textAlign: "right" }}>
                      49-53 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Automatic
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
                <img src={CarImg9} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>King Long</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      XMQ6129Y
                    </span>
                    <span style={{ textAlign: "right" }}>
                      45-49 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Manual
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
                <img src={CarImg12} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Bharat Benz</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      Tourist Coach
                    </span>
                    <span style={{ textAlign: "right" }}>
                      45 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Manual
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
                <img src={CarImg13} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Yutong</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                        ZK6129H
                    </span>
                    <span style={{ textAlign: "right" }}>
                      49-55 &nbsp; <IconUsers />
                    </span>
                    <span>
                      Manual
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
                <img src={CarImg14} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Tata Starbus</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      Ultra
                    </span>
                    <span style={{ textAlign: "right" }}>
                      34-46 &nbsp; <IconUsers />
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
                <img src={CarImg15} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Golden Dragon</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      ML6125
                    </span>
                    <span style={{ textAlign: "right" }}>
                      49-55 &nbsp; <IconUsers />
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
