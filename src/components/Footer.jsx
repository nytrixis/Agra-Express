import React from "react";
import { IconMail, IconPhoneCall, IconMapPin } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Agra</span> Express
              </li>
              <li>
                Customer Satisfaction and Safety First.
              </li>
              <li>
              <a href="tel:123456789" className="contact-item">
                <IconPhoneCall /> &nbsp; 9540351000, 8766373398, 011 49846766
              </a>

              </li>

              <li>
                <a
                  href="mailto: 
                info@agraexpress.com" className="contact-item"
                >
                  <IconMail />
                  &nbsp; info@agraexpress.com
                </a>
              </li>

              
            </ul>

            <ul className="footer-content__2">
              <li>Links</li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>
                <a href="#" className="contact-item">
                  <IconMapPin />WTI Hotels & Resorts 84, Mahipalpur, Vasantkunj Road, Near IGI Airport, New Delhi -110037
                </a>
              </li>
              <li>Mon -Sat: 9:00AM - 9:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Enter your email address for personalized newsletters and updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
