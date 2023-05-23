/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../shared/Hero";

function IndividualDriver() {
  return (
    <>
      <div className="hero-section">
        <Hero
          heroHeading={"Drive With Bolt"}
          heroParagraph={"Earn good money"}
          boldParagraph={"with your vehicle."}
          showWhatsAppSignUp={true}
          individualHeading={"Signup as a driver below"}
          individualParagraph={"If you have multiple vehicles and drivers,"}
          fleetOwnerSignUp={" signup as a fleet owner here"}
          placeholder={"john.doe@gmail.com"}
          helperText={"This will be your username."}
          cityVehicles={"City"}
          citiesDefaultValue={"Accra"}
        />
      </div>
    </>
  );
}

export default IndividualDriver;
