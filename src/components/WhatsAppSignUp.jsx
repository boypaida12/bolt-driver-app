/* eslint-disable no-unused-vars */
import { WhatsApp } from "@mui/icons-material";
import React from "react";

function WhatsAppSignUp() {
  return (
    <div className="mb-5">
      <div
        className="d-flex gap-2 rounded py-2 px-3 whatsapp_signup__button"
        style={{
          backgroundColor: "#25d366",
          width: "fit-content",
          color: "#ffff",
        }}
      >
        <WhatsApp sx={{ fontSize: 40, alignSelf: "center" }} />
        <a href="" className="fw-semibold lh-1 m-auto text-white">
          Sign up on
          <br /> <span className="fw-bold fs-5">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default WhatsAppSignUp;
