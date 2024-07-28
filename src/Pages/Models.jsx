import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import CarImg7 from "../images/cars-big/toyotasienna.jpg";
import CarImg8 from "../images/cars-big/toyotapries.jpg";
import CarImg9 from "../images/cars-big/swiftdzire.jpg";
import CarImg10 from "../images/cars-big/hyundaitucson.jpg";
import CarImg11 from "../images/cars-big/toyotacorolla.jpg";
import CarImg12 from "../images/cars-big/volkswagenegolf.jpg";
import CarImg13 from "../images/cars-big/skodasuperb.jpg";
import CarImg14 from "../images/cars-big/mercedezbenzsclass.jpg";
import CarImg15 from "../images/cars-big/audia8l.jpg";
import CarImg16 from "../images/cars-big/pbmw3series.jpg";
import CarImg17 from "../images/cars-big/pbmw5series.jpg";
import CarImg18 from "../images/cars-big/pbmw5seriestouring.jpg";
import CarImg19 from "../images/cars-big/pmercedezbenzCLAclass.jpg";
import CarImg20 from "../images/cars-big/pmercedezbenzcabriolet.jpg";
import CarImg22 from "../images/cars-big/shondaamaze.jpg";
import CarImg23 from "../images/cars-big/shondabr-v.jpg";
import CarImg24 from "../images/cars-big/shondacr-v.jpg";
import CarImg25 from "../images/cars-big/smarutialtok10.jpg";
import CarImg26 from "../images/cars-big/ssuzukivitarabrezza.jpg";
import CarImg27 from "../images/cars-big/stoyotainnovacrysta.jpg";


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
            <p className="models-subtitle">Choose from a variety of our amazing Car Models</p>
          </div>
          <h2 className="models-category">Economy Cars</h2>
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg7} alt="car_img" />
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
                    Sienna
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      Automatic
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Petrol &nbsp; <IconCar />
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
                <img src={CarImg8} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Toyota</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107" />
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
                      Prius
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      Automatic
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Petrol &nbsp; <IconCar />
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
                      <p>Maruti Suzuki</p>
                      <span>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107" />
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} fill="#ffc107" stroke="#ffc107"/>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      Swift Dzire
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg10} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Hyundai</p>
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
                      Tucson
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg11} alt="car_img" />
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
                      Corolla
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                      E Golf
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      Automatic
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Petrol &nbsp; <IconCar />
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

          <h2 className="models-category">Luxury & Executive Cars</h2>
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg13} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Skoda</p>
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
                      Superb
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                      <p>Mercedez</p>
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
                      Benz S
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg15} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Audi</p>
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
                      A8 L
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BMW 320</p>
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
                      ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                      <p>Mercedes</p>
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
                      Benz GLK
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                      <p>VW Passat</p>
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
                      ComfortLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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

          <h2 className="models-category">Top Premium Cars</h2>
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg16} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BMW</p>
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
                      3 Series
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg17} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BMW</p>
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
                      5 Series
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg18} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BMW</p>
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
                      5 Series Touring
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg19} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Mercedez</p>
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
                      Benz CLA
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg20} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Mercedes</p>
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
                      <IconCar /> &nbsp; Benz Cabriolet
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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

          <h2 className="models-category">SUV / MUV Cars</h2>
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg22} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Honda</p>
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
                      Amaze
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg23} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Honda</p>
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
                      BR-V
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg24} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Honda</p>
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
                      CR-V
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg25} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Maruti Suzuki </p>
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
                      Alto K10
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Petrol &nbsp; <IconCar />
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
                <img src={CarImg26} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Maruti Suzuki</p>
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
                      Vitara Brezza
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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
                <img src={CarImg27} alt="car_img" />
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
                      Innova Crysta
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <IconCar />
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

        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

export default Models;
