/* eslint-disable no-unused-vars */
import React from "react";
import {
  Container,
  Navbar,
} from "react-bootstrap";
import Logo from "../../assets/bolt-logo.svg";
import { Button } from "@mui/material";
   

function NavigationBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="bg-transparent pt-4" style={{maxWidth: "1180px", margin: "auto"}}>
        <Container>
        <Navbar.Brand href="/"><img src={Logo} alt="" width={80} /></Navbar.Brand>
        <Button variant="text" sx={{ color: "white"}} size="large" className="fw-bold">Log in</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
