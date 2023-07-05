/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Tabs from "../../components/shared/Tabs";
import SharedButton from "../../components/shared/SharedButton";
import { Link } from "react-router-dom";
import SignInNav from "../../components/shared/SignInNav";

function LogIn({email, phone, handleEmailChange, handlePhoneChange}) {
  
  const [activeTab, setActiveTab] = useState("email");

  

  const isEmailEmpty = email.length === 0;
  const isPhoneEmpty = phone.length === 0;

  const isDisabled =
    (activeTab === "email" && isEmailEmpty) ||
    (activeTab === "phone" && isPhoneEmpty);
  const buttonColor = isDisabled ? "#65d683d2" : "#40df6d";

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-lg-5 mt-3">
        <div className="custom-container">
          <SignInNav pseudoTitle={"Log in"} pseudoClassName={"pseudo__paragraph w-42"}/>
          <Tabs
            handleEmailChange={handleEmailChange}
            handlePhoneChange={handlePhoneChange}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="mt-5 mt-lg-4 mb-2 disabled">
            <SharedButton
              backgroundColor={buttonColor}
              buttonText={"Continue"}
              disabled={isDisabled}
              color={"white"}
            />
          </div>
          <div className="mb-4">
            <SharedButton
              backgroundColor="transparent"
              buttonText={"Email me a login link"}
              color={"#40df6d"}
              border={"1px solid #40df6d"}
              className="shared-button"
            />
          </div>
          <div className="text-center py-4 fg_pswd__hr">
            <Link to="/forgot-password" className="text-green fw-semibold">
              <small>Forgot Password</small>
            </Link>
          </div>
          <hr style={{ color: "rgba(0, 0, 0, 0.3)" }} />
          <div className="text-center">
            <small>Not a Bolt driver?</small>
            <Link to="/" className="text-green fw-semibold">
              <small> Signup here.</small>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
