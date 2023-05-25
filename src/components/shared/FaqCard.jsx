/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function FaqCard({ question, answer }) {
  return (
    <>
      <small>
        <span className="fw-bold">{question}</span>
        <p>{answer}</p>
      </small>
    </>
  );
}

export default FaqCard;
