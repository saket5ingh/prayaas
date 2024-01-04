import React from "react";

import team_pic from "../../assets/team/team_bg.jpeg";
import BigCard from "./BigCard";
import social_sec from "../../assets/team/social_secretary.jpg";
import tea1 from "../../assets/team/treasurer_1.jpg";
import sir1 from "../../assets/team/sir1.jpg";
import sir2 from "../../assets/team/sir2.png";
function Team() {
  return (
    <>
      <div className="team-cont d-flex justify-content-center align-items-end">
        <img className="team-pic" src={team_pic} alt="team" />
        <div className="title ">Team of Prayaas</div>
      </div>
      <br />
      <br />
      <BigCard
        card2="true"
        title="Professor Incharge"
        img2={sir1}
        img1={sir2}
        card2Title="DR. G N Nimbarte"
        card1Title="DR. Dilip Peshwe"
        card2branch="Email: gnimbarte@hss.vnit.ac.in"
        card1branch="Email: dilippeshwe@mme.vnit.ac.in"
      />

      <BigCard
        color={true}
        title="Social Affairs Secretary"
        img1={social_sec}
        card1Title="Yashasvi Therkar"
        card1batch="Batch: 2020-2024"
        card1branch="Department: Chemical Engineering"
        card1email="Email: socialsec@students.vnit.ac.in"
      />
      <BigCard
        title="Treasurers"
        // card2="true"
        img1={tea1}
        // img2={tea2}
        card1Title="Swaroop Ingrole"
        card1batch="Batch: 2021-2025"
        card1branch="Department: Chemical Engineering"
        card1email="Email: prayaas.vnit.official@gmail.com"
        // card2Title="Kajal Yadav"
        // card2batch="Batch: 2020-2024"
        // card2branch="Department: Mining Engineering"
        // card2email="Email: prayaas.vnit.official@gmail.com"
      />
    </>
  );
}

export default Team;
