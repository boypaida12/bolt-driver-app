/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import DriverLogo from "../../assets/bolt-driver-logo.svg";

function SignInNav({pseudoTitle, pseudoClassName }) {
  return (
    <>
      <div className="text-center">
        <Nav as={Link} to="/">
          <Image
            src={DriverLogo}
            style={{ maxWidth: "270px" }}
            className="mx-auto"
          />
        </Nav>
        <p className={`text-uppercase my-3 ls-0 text-black-50 ${pseudoClassName}`}>
          <small>{pseudoTitle}</small>
        </p>
      </div>
    </>
  );
}

export default SignInNav;
