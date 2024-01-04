import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidDonateHeart } from "react-icons/bi";

import "./Navbar.css";
export default function Navbar() {
  const [navtrans, setNavtrans] = useState(true);
  const [mobmenu, setmobmenu] = useState(false);
  const bgtrans = () => {
    if (window.scrollY >= 100) {
      setNavtrans(false);
    } else {
      setNavtrans(true);
    }
  };
  window.addEventListener("scroll", bgtrans);
  return (
    <div className={navtrans ? "navbar2 trans" : "navbar2"}>
      <div className="logo">{/* <img  src={logo} alt="" /> */}</div>
      <ul className="nav2-menu">
        <li className="linemove">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="linemove">
          <NavLink to="/Events">Events</NavLink>
        </li>
        <li className="linemove">
          <NavLink to="/Team#top">Team</NavLink>
        </li>
        <li className="space1">
          <a
            className="register"
            href="https://www.linkedin.com/in/ayush--kumar--/"
            target="_blank"
            rel="noopener noreferrer"
            previewlistener="true"
          >
            {" "}
            Register Now!!
          </a>
        </li>
        <li>
          <NavLink className="active1" to="/Contribute">
            <button className="button-5">
              Donate Us <BiSolidDonateHeart className="image-heart" />
            </button>
          </NavLink>
        </li>
      </ul>
      <div
        className="hamburger"
        onClick={() => {
          setmobmenu(!mobmenu);
        }}
      >
        {mobmenu ? <FaWindowClose /> : <GiHamburgerMenu />}
      </div>
      {/* -----mobmenu------ */}
      <div className="mobmenu" style={mobmenu ? {} : { visibility: "hidden" }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/Events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/Team">Team</NavLink>
        </li>
        <li className="space1">
          <a
            className="register"
            href="https://www.linkedin.com/in/ayush--kumar--/"
            target="_blank"
            rel="noopener noreferrer"
            previewlistener="true"
          >
            {" "}
            Register Now!!
          </a>
        </li>
        <li>
          <NavLink to="/Contribute">
            <button className="button-5">
              Donate Us <BiSolidDonateHeart className="image-heart" />
            </button>
          </NavLink>
        </li>
      </div>
    </div>
  );
}
