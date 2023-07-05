/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NavigationBar from "./NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import HeroText from "./HeroText";
import HeroForm from "./HeroForm";
import WhatsAppSignUp from "../WhatsAppSignUp";
import { HiChevronDown } from "react-icons/hi2";
import { motion } from "framer-motion";

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
  cityVehicleDefaultValue,
  showHiChevronDown,
  fleetParagraph,
  individualOwnerSignUp,
  fleetMainParagraphStart,
  fleetMainParagraphBold,
  fleetMainParagraphEnd,
  cityVehicleName,
  showVehicleNumber,
  showCities,
}) {
  return (
    <>
      <NavigationBar />
      <Container className="mt-lg-5" style={{ maxWidth: 980 }}>
        <Row className="">
          <Col className="text-white mt-lg-5 mt-4" lg={{ span: 5 }}>
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
              cityVehicleDefaultValue={cityVehicleDefaultValue}
              fleetParagraph={fleetParagraph}
              individualOwnerSignUp={individualOwnerSignUp}
              fleetMainParagraphStart={fleetMainParagraphStart}
              fleetMainParagraphBold={fleetMainParagraphBold}
              fleetMainParagraphEnd={fleetMainParagraphEnd}
              cityVehicleName={cityVehicleName}
              showVehicleNumber={showVehicleNumber}
              showCities={showCities}
            />
          </Col>
        </Row>
      </Container>
      <motion.div className="text-center mt-5" whileInView={{y: [50, -20, 50], transition: {repeat: 5, duration: 2}}}>
        <a href="#about">
          {showHiChevronDown && (
            <HiChevronDown
              style={{ color: "#40df6d" }}
              className="display-5 mb-5"
            />
          )}
        </a>
      </motion.div>
    </>
  );
}

export default Hero;
