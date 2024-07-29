import React from "react";
import {useEffect, useState } from "react";
import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal

  const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", 
    "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Kanpur", "Nagpur", 
    "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", 
    "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", 
    "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", 
    "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", 
    "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", 
    "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", 
    "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubballi-Dharwad", 
    "Tiruchirappalli", "Bareilly", "Mysore", "Tiruppur", "Gurgaon", 
    "Aligarh", "Jalandhar", "Bhubaneswar", "Salem", "Mira-Bhayandar", 
    "Warangal", "Thiruvananthapuram", "Guntur", "Bhiwandi", "Saharanpur", 
    "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai", 
    "Cuttack", "Firozabad", "Kochi", "Nellore", "Bhavnagar", "Dehradun", 
    "Durgapur", "Asansol", "Rourkela", "Nanded", "Kolhapur", "Ajmer", 
    "Akola", "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri", 
    "Jhansi", "Ulhasnagar", "Jammu", "Sangli-Miraj & Kupwad", "Mangalore", 
    "Erode", "Belgaum", "Ambattur", "Tirunelveli", "Malegaon", "Gaya", 
    "Jalgaon", "Udaipur", "Maheshtala"
  ];
  

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [setCarImg] = useState("");
  const [vehicleSubtype, setVehicleSubtype] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [filteredPickUpCities, setFilteredPickUpCities] = useState([]);
  const [filteredDropOffCities, setFilteredDropOffCities] = useState([]);



  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleVehicleModel = (e) => {
    setVehicleModel(e.target.value);
  };

  const vehicleModels = {
    Economy: ["Toyota Sienna", "Toyota Prius", "Maruti Suzuki Swift Dzire", "Hyundai Tucson", "Toyota Corolla", "Volkswagen E Golf"],
    Luxury: ["Skoda Superb", "Mercedez benz S Class", "Audi A8 L", "BMW 320 Modernline", "Mercedez Benz GLK", "VW Passat ComfortLine"],
    Premium: ["TBMW 3 Series", "BMW 5 Series", "BMW 5 Series Touring", "Mercedez Benz CLA Class", "Mercedez Benz Cabriolet", "VW Passat Comfortline"],
    SUVMUV: ["Honda Amaze", "Honda BR-V", "Honda CR-V", "Maruti Suzuki Alto K10", "Maruti Suzuki Vitara Brezza", "Toyota Innova Crysta"],
    MiniVan: ["Volkswagen Crafter", "Toyota HiAce", "Mercedez Benz Sprinter", "Mercedez Benz Experience Explorers", "Nissan Urvan", "Mercedez Benz S Class"],
    MiniCoach: ["Mercedes Benz Sprinter Minibus", "Toyota Coaster", "Volkswagen Crafter Minibus"],
    LargeCoach: ["Volvo B11R", "King Long XMQ6129Y", "Bharat Benz Tourist Coach"],
    LuxuryCoach: ["Yutong ZK6129H", "Tata Starbus Ultra", "Golden Dragon ML6125"]
  };
  
  
  const handleVehicleSubtype = (e) => {
    setVehicleSubtype(e.target.value);
  };
  
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  const collectFormData = () => {
    return {
      vehicleType: carType,
      vehicleSubtype,
      vehicleModel,
      pickUp,
      dropOff,
      pickTime,
      dropTime,
      name,
      lastName,
      phone,
      age,
      email,
      address,
      city,
      zipcode
    };
  };  

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = async (e) => {
    e.preventDefault();
    const formData = collectFormData();
  
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'savarniknandinee2416@gmail.com',
          subject: 'New Vehicle Booking',
          formData
        }),
      });
  
      if (response.ok) {
        setModal(false);
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "flex";
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send booking details. Please try again.');
    }
  };
  

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a Vehicle</h2>

              <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Select Your Vehicle
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your Vehicle type</option>
                    <option value="Car">Car</option>
                    <option value="Coach">Coach</option>
                  </select>
                </div>

                {carType && (
                  <div className="box-form__car-type">
                    <label>
                      <IconCar className="input-icon" /> &nbsp; Select Vehicle Subtype <b>*</b>
                    </label>
                    <select value={vehicleSubtype} onChange={handleVehicleSubtype}>
                      <option>Select vehicle subtype</option>
                        {carType === "Car" ? (
                          <>
                          <option value="Economy">Economy cars</option>
                          <option value="Luxury">Luxury cars</option>
                          <option value="Premium">Premium cars</option>
                          <option value="SUVMUV">SUV/MUV cars</option>
                        </>
                      ) : (
                        <>
                        <option value="MiniVan">Mini vans</option>
                        <option value="MiniCoach">Mini coaches</option>
                        <option value="LargeCoach">Large coaches</option>
                        <option value="LuxuryCoach">Luxury coaches</option>
                      </>
                    )}
                  </select>
                </div>
                )}

                {vehicleSubtype && (
                  <div className="box-form__car-type">
                    <label>
                      <IconCar className="input-icon" /> &nbsp; Select {carType} Model <b>*</b>
                    </label>
                  <select value={vehicleModel} onChange={handleVehicleModel}>
                    <option>Select {carType.toLowerCase()} model</option>
                    {vehicleModels[vehicleSubtype].map((model, index) => (
                      <option key={index} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>
                )}


                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <input
                    type="text"
                    value={pickUp}
                    onChange={(e) => {
                      setPickUp(e.target.value);
                      const filtered = indianCities.filter(city => 
                        city.toLowerCase().startsWith(e.target.value.toLowerCase())
                      );
                      setFilteredPickUpCities(filtered);
                    }}
                    placeholder="Start typing a pick-up city name"
                  />
                  {filteredPickUpCities.length > 0 && (
                    <ul className="city-dropdown">
                      {filteredPickUpCities.map((city, index) => (
                      <li key={index} onClick={() => {
                        setPickUp(city);
                        setFilteredPickUpCities([]);
                      }}>
                        {city}
                      </li>
                    ))}
                </ul>
                )}
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop-off{" "}
                    <b>*</b>
                  </label>
                  <input
                    type="text"
                    value={dropOff}
                    onChange={(e) => {
                      setDropOff(e.target.value);
                      const filtered = indianCities.filter(city => 
                        city.toLowerCase().startsWith(e.target.value.toLowerCase())
                      );
                      setFilteredDropOffCities(filtered);
                    }}
                    placeholder="Start typing a drop-off city name"
                  />
                  {filteredDropOffCities.length > 0 && (
                    <ul className="city-dropdown">
                      {filteredDropOffCities.map((city, index) => (
                      <li key={index} onClick={() => {
                        setDropOff(city);
                        setFilteredDropOffCities([]);
                      }}>
                        {city}
                      </li>
                    ))}
                </ul>
                )}
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <IconX onClick={openModal} />
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <IconInfoCircleFilled /> Upon completing this reservation enquiry,
            you will receive:
          </h4>
          <p>
            A booking comfirmation mail at your e-mail address, our team will get in touch with you soon.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Vehicle -</span> {vehicleModel}
            </h5>
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;