import React from "react";

import Card from "./Card";
function BigCard({
  color,
  title,
  card2,
  card1Title,
  card1batch,
  img1,
  img2,
  card2Title,
  card2batch,
  card1branch,
  card1email,
  card2branch,
  card2email,
}) {
  const clr = color ? "bg-secondary bg-gradient bg-opacity-25" : "";
  return (
    <>
      <div className={`bg ${clr} `}>
        <h2 className="team-title text-start">{title}</h2>
        <hr
          style={{
            borderTop: "4px solid orange",
            width: "25em",
            marginLeft: "3em",
          }}
        />
        <div className="card-con d-flex flex-col align-items-center">
          <Card
            img={img1}
            title={card1Title}
            batch={card1batch}
            branch={card1branch}
            email={card1email}
          />
          {card2 ? (
            <Card
              img={img2}
              title={card2Title}
              batch={card2batch}
              branch={card2branch}
              email={card2email}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default BigCard;
