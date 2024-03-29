/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../../components/shared/Hero";


function FleetDriver({handleEmailChange, handlePasswordChange, signUp}) {
  return (
    <>
      <div className="hero-section fleet-bg pb-2">
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
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          signUp={signUp}
        />
      </div>
    </>
  );
}

export default FleetDriver;
