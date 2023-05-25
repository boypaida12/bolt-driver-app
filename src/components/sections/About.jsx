/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row } from "react-bootstrap";
import WhyCard from "../shared/WhyCard";
import { AccessTime, AutoGraph, MoneyOffCsred } from "@mui/icons-material";
import HowCard from "../shared/HowCard";
import StepI from "../../assets/step1.jpg";
import StepII from "../../assets/step2.jpg";
import StepIII from "../../assets/step3.jpg";

function About({ heading, showWhyCard, showHowCard }) {
  return (
    <>
      <h1 className="fw-bold text-muted fs-2 text-center">{heading}</h1>
      {showWhyCard && (
        <Container>
          <Row>
            <WhyCard
              spanIcon={<AutoGraph className="graph-icon" />}
              spanHeading={"Earn money"}
              spanParagraph={"Drive with Bolt and earn extra income."}
            />
            <WhyCard
              spanIcon={<AccessTime className="graph-icon" />}
              spanHeading={"Drive anytime"}
              spanParagraph={
                "Work with your own schedule. No minimum hours and no boss."
              }
            />
            <WhyCard
              spanIcon={<MoneyOffCsred className="graph-icon" />}
              spanHeading={"No monthly fees"}
              spanParagraph={"No risk, you only pay when you earn."}
            />
          </Row>
        </Container>
      )}
      {showHowCard && (
        <Container>
          <Row className="gap-3 gap-md-0 fs-4 fw-light text-muted">
            <HowCard howHeading={"1. Accept the request"} imgSrc={StepI} />
            <HowCard howHeading={"2. Pickup the client"} imgSrc={StepII} />
            <HowCard howHeading={"3. Drive to destination"} imgSrc={StepIII} />
          </Row>
        </Container>
      )}
    </>
  );
}

export default About;
