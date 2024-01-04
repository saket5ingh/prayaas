import React from "react";
import Background from "../../assets/home_bg2.jpg";
import HeaderSocials from "./HeaderSocials.jsx";
import { Parallax } from "react-parallax";
import Card from "../Team/Card";
import Slider from "./Slider";
import Programs from "./Programs";
import ExpSlider from "./ExpSlider";
import ExpCard from "./ExpCard";
import { BsDash } from "react-icons/bs";
import "./About.css";
import daan_utsav from "../../assets/events/Renaissance.jpg";
import Renaissance_Brochure from "../../assets/Renaissance_Brochure.pdf";
function Home() {
  return (
    <div className="Home">
      <div className="paralax">
        <Parallax strength={50} bgImage={Background}>
          <div className="home-content">
            <div className="home-title-content">
              Prayaas
              <h2>
                <BsDash />
                Social Club of VNIT Nagpur
              </h2>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="container experience_container">
        <div>
          <section className="home-section">
            <h2 className="home-secHeading" style={{ fontSize: "4.5rem" }}>
              About Us
            </h2>
            <p className="home-text" style={{ color: "black" }}>
              <b>PRAYAAS </b>is an official social initiative program of VNIT
              Nagpur. This program is inspired by the vision of Dr. A.P.J.Abdul
              Kalam of making education compliant to societal needs and
              providing knowledge connectivity to rural India. The idea of a
              contributing one's self to the society or in fact, repaying the
              society with what it has bestowed us is an urge that couldn't be
              trapped within for a long time. The bottled conscience gave rise
              to the group PRAYAAS.The thought was nurtured by Mr. Pratyush
              Prabhakar, now an alumnus of VNIT. In September 2006, Prayaas came
              to existence which now has grown into a concrete well planned
              activity supported by the Technical Education students which
              Quality Improvement Program (TEQIP), Govt. of India.
              <br />
            </p>
          </section>
        </div>
        <div>
          <section className="home-section">
            {" "}
            <h1
              style={{
                color: "#FF6600",
                fontSize: "4.2rem",
                textAlign: "center",
              }}
            >
              Upcoming Events
            </h1>
            <div className="event">
              <h2
                style={{
                  color: "#000000",
                  fontSize: "2.9rem",
                  fontFamily: "Georgia",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Renaissance: A National Social Conference
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.5",
                  color: "#000000",
                }}
              >
                Renaissance is a national-level social conference that brings
                together students from prestigious technological, managerial,
                and medical institutions across India. This unique platform aims
                to bridge the gap between technical expertise and social issues,
                empowering students to use their knowledge and skills to address
                challenges faced by our country.
              </p>
              <div
                style={{
                  maxWidth: "50%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                  transition: "transform 0.2s", // Add a smooth transition
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.5)"; // Enlarge on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"; // Return to normal size
                }}
              >
                <img
                  src={daan_utsav}
                  alt="Event Poster"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>{" "}
            <a
              className="report-button"
              href={Renaissance_Brochure}
              download="Renaissance Brochure"
            >
              <button className="btn">Renaissance Brochure</button>
            </a>
          </section>
        </div>
      </div>
      <section className="home-section">
        <h2 className="home-secHeading">Our Work</h2>
        <Programs />
      </section>

      <section className="home-section">
        <div>
          <h2 className="home-secHeading">GALLERY</h2>
          <div className="slider-cont">
            <Slider />
          </div>
        </div>
      </section>

      <div>
        <h2 className="home-secHeading">Experience </h2>
        <div className="exp-cont">
          <ExpSlider />
        </div>
      </div>
    </div>
  );
}

export default Home;
