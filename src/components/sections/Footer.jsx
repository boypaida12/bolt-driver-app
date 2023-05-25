/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <div className="text-center">
        <a href="#hero">
          <Button
            variant="contained"
            size="large"
            type="submit"
            style={{
              backgroundColor: "#40df6d",
              color: "#ffff",
              paddingBlock: 10,
              fontSize: 18,
              textTransform: "none",
            }}
            className="fw-semibold"
          >
            Signup to drive with Bolt
          </Button>
        </a>
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
