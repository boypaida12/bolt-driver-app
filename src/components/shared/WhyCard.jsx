/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Col } from "react-bootstrap";

function WhyCard({ spanIcon, spanHeading, spanParagraph }) {
  return (
    <>
      <Col md={4} className="text-center mt-4" style={{ color: "#555555" }}>
        <span>{spanIcon}</span>
        <h2 className="fs-4 fw-light mt-3">{spanHeading}</h2>
        <p className="fw-semibold" style={{ fontSize: 14 }}>
          {spanParagraph}
        </p>
      </Col>
    </>
  );
}

export default WhyCard;
