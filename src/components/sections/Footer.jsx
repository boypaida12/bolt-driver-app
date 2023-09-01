/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <div className="text-center">
        
          <Button
            size="large"
            type="submit"
            style={{
              backgroundColor: "#40df6d",
              paddingBlock: 10,
              fontSize: 18,
              textTransform: "none",
            }}
            className="fw-semibold footer-button"
          >
            <a href="#hero" className="text-white fs-6 ">Signup to drive with Bolt</a>
          </Button>
        
        <div className="my-4">
          <span>
            <small>
              Got questions or concerns?{" "}
              <a href="/" style={{ color: "#40df6d" }}>
                <span>Contact us.</span>
              </a>
            </small>
          </span>
          <p>
            <small>
              Taxify OÜ. Vana-Lõuna tn 39/1, Tallinn, 10134, Estonia
            </small>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
