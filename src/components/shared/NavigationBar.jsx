/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/bolt-logo.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="bg-transparent pt-4"
        style={{ maxWidth: "1180px", margin: "auto" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="" width={80} />
          </Navbar.Brand>
          <Nav as={Link} to="/log-in">
            <Button
              variant="text"
              sx={{ color: "white" }}
              size="large"
              className="fw-bold"
            >
              Log in
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
