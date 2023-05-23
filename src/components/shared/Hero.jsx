/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NavigationBar from "./NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import HeroText from "./HeroText";
import HeroForm from "./HeroForm";
import WhatsAppSignUp from "../WhatsAppSignUp";

function Hero({
  heroHeading,
  heroParagraph,
  boldParagraph,
  showWhatsAppSignUp,
  individualHeading,
  fleetHeading,
  individualParagraph,
  fleetOwnerSignUp,
  placeholder,
  helperText,
  cityVehicles,
  citiesDefaultValue
}) {
  return (
    <>
      <NavigationBar />
      <Container className="mt-5" style={{ maxWidth: 900 }}>
        <Row className="">
          <Col className="text-white mt-5" lg={{ span: 5 }}>
            <HeroText
              heroHeading={heroHeading}
              heroParagraph={heroParagraph}
              boldParagraph={boldParagraph}
            />
            {showWhatsAppSignUp && <WhatsAppSignUp />}
          </Col>
          <Col lg={{ span: 5, offset: 2 }}>
            <HeroForm
              individualHeading={individualHeading}
              fleetHeading={fleetHeading}
              individualParagraph={individualParagraph}
              fleetOwnerSignUp={fleetOwnerSignUp}
              placeholder={placeholder}
              helperText={helperText}
              cityVehicles={cityVehicles}
              citiesDefaultValue={citiesDefaultValue}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hero;
