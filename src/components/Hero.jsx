import React from "react";
import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar1 from "../images/hero/main-car.png";
import HeroCar2 from "../images/hero/1.png";
import HeroCar3 from "../images/hero/2.png";
import HeroCar4 from "../images/hero/3.png";
import HeroCar5 from "../images/hero/4.png";
import { useEffect, useState, useCallback } from "react";
import { IconChevronRight, IconChevronLeft, IconCircleCheck } from "@tabler/icons-react";


function Hero() {
  const [goUp, setGoUp] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carImages = [HeroCar1, HeroCar2, HeroCar3, HeroCar4, HeroCar5];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % carImages.length;
      document.querySelector(`.hero-content__car-img:nth-child(${prev + 1})`).classList.add('prev');
      setTimeout(() => {
        document.querySelector(`.hero-content__car-img:nth-child(${prev + 1})`).classList.remove('prev');
      }, 500);
      return next;
    });
  }, [carImages]);
  
  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev - 1 + carImages.length) % carImages.length;
      document.querySelector(`.hero-content__car-img:nth-child(${next + 1})`).classList.remove('prev');
      return next;
    });
  };
  
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  


  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);
  

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your <span>trip</span> now with</h4>
              <h1>
                Agra <span>Express</span> 
              </h1>
              <p>
                Drive Your Journey Forward with Agra Express - Where Every Ride is a First-Class Experience.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride btn-align"
                  to="/"
                >
                  Book Ride &nbsp; <IconCircleCheck />
                </Link>
                <Link 
                className="hero-content__text__btns__learn-more btn-align" to="/models">
                  Discover &nbsp; <IconChevronRight />
                </Link>
              </div>
            </div>

            <div className="hero-content__carousel">
              {carImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`car-${index + 1}`}
                  className={`hero-content__car-img ${index === currentSlide ? 'active' : ''}`}
                />
              ))}
  
              <button className="carousel-arrow left" onClick={prevSlide}>
                <IconChevronLeft />
              </button>
              <button className="carousel-arrow right" onClick={nextSlide}>
                <IconChevronRight />
              </button>
  
              <div className="carousel-dots">
                {carImages.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          ^
        </div>
      </section>
    </>
  );
}

export default Hero;
