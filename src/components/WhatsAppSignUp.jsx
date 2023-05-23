/* eslint-disable no-unused-vars */
import { WhatsApp } from "@mui/icons-material";
import React from "react";

function WhatsAppSignUp() {
  return (
    <div className="mb-5">
      <a
        href="/"
        className="d-flex gap-2 rounded py-2 px-3"
        style={{ backgroundColor: "#25d366", width: "fit-content", color: "#ffff" }}
      >
        <WhatsApp sx={{ fontSize: 40, alignSelf: "center" }} />
        <p className="fw-semibold lh-1 m-auto">
          Sign up on
          <br /> <span className="fw-bold fs-5">WhatsApp</span>
        </p>
      </a>
    </div>
  );
}

export default WhatsAppSignUp;
