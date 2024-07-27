import React from "react";
import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over several
                years of experience.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; 9540351000, 8766373398, 011 49846766
              </a>
              <a href="/">
                <IconMail /> &nbsp; info@agraexpress.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; WTI Hotels & Resorts 84, Mahipalpur, Vasantkunj Road, Near IGI Airport, New Delhi -110037
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='Your Name'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about your issue <b>*</b>
                </label>
                <textarea placeholder="Type your message..."></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
}

export default Contact;
