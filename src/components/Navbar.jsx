import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Cars
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/coaches">
                Coaches
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </NavLink>
          </div>
          <ul className="navbar__links">
            <li>
              <NavLink className="home-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="about-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="models-link" to="/models">
                Car models
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="testi-link" to="/coaches">
                Coach models
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="contact-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
