/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../../shared/Hero";

function FleetDriver() {
  return (
    <>
      <div className="hero-section fleet-bg">
        <Hero
          heroHeading={"Add your Fleet to Bolt"}
          heroParagraph={"Manage drivers, vehicles and documents"}
          fleetHeading={"Fleet Owners:"}
          fleetParagraph={"If you are an individual driver, "}
          individualOwnerSignUp={"signup as a driver here."}
          fleetMainParagraphStart={"Sign up here if you have "}
          fleetMainParagraphBold={"multiple vehicles"}
          fleetMainParagraphEnd={" to add on the Bolt platform."}
          placeholder={"john.doe@company.com"}
          cityVehicles={"Vehicles in your fleet"}
          cityVehicleName={"vehicles"}
          showVehicleNumber={true}
          cityVehicleDefaultValue={"1-10"}
        />
      </div>
    </>
  );
}

export default FleetDriver;
