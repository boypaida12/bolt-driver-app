/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/shared/Hero";
import About from "../components/sections/About";
import FaqComponent from "../components/shared/FaqComponent";
import Footer from "../components/sections/Footer";

function IndividualDriver() {
  return (
    <>
      <div className="hero-section individual-bg" id="hero">
        <Hero
          heroHeading={"Drive With Bolt"}
          heroParagraph={"Earn good money"}
          boldParagraph={"with your vehicle."}
          showWhatsAppSignUp={true}
          individualHeading={"Signup as a driver below"}
          individualParagraph={"If you have multiple vehicles and drivers, "}
          fleetOwnerSignUp={"signup as a fleet owner here"}
          placeholder={"kabuteykwashie@gmail.com"}
          helperText={"This will be your username."}
          cityVehicles={"City"}
          cityVehicleDefaultValue={"Accra"}
          showHiChevronDown={true}
          showCities={true}
        />
      </div>
      <div className="about-section" id="about">
        <div
          className="d-flex flex-column justify-content-center"
          style={{ minHeight: "60vh", marginBlock: 60 }}
        >
          <About heading={"Why Bolt?"} showWhyCard={true} />
        </div>
        <hr className="w-50 mx-auto" />
        <div
          className="d-flex flex-column justify-content-center"
          style={{ minHeight: "60vh", marginBlock: 60 }}
        >
          <About heading={"How Bolt works?"} showHowCard={true} />
        </div>
      </div>
      <div className="faq-section border rounded-2 py-4 px-md-5">
        <h1 className="text-center fw-bold text-muted fs-2">
          Frequently Asked Questions
        </h1>
        <FaqComponent />
      </div>
      <footer className="footer-section my-4">
        <Footer />
      </footer>
    </>
  );
}

export default IndividualDriver;
