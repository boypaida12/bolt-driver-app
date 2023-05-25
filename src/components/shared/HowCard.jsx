/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col } from "react-bootstrap";

function HowCard({ howHeading, imgSrc, altText }) {
  return (
    <>
      <Col md={4} className="text-center mt-4" style={{ color: "#555555" }}>
        <h3 className="fs-4 fw-light">{howHeading}</h3>
        <img
          src={imgSrc}
          alt={altText}
          className="img-thumbnail rounded-circle"
        />
      </Col>
    </>
  );
}

export default HowCard;
