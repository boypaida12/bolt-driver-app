/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function HeroText({ heroHeading, heroParagraph, boldParagraph }) {
  return (
    <div className="text-after">
      <h1 className="fw-bold">
        {heroHeading}
      </h1>
      <p className="fs-5">
        {heroParagraph}
        <span className="fw-bold"> {boldParagraph} </span>
      </p>
    </div>
  );
}

export default HeroText;
