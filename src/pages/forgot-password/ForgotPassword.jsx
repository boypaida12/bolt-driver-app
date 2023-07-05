/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SignInNav from "../../components/shared/SignInNav";
import EmailInput from "../../components/shared/EmailInput";
import PhoneInput from "../../components/shared/PhoneInput";
import SharedButton from "../../components/shared/SharedButton";

function ForgotPassword({
  email,
  phone,
  handleEmailChange,
  handlePhoneChange,
}) {
  const isDisabled = email.length === 0 || phone.length === 0;
  const buttonColor = isDisabled ? "#65d683d2" : "#40df6d";

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-lg-5 mt-3">
        <div className="custom-container">
          <SignInNav
            pseudoTitle={"forgot password"}
            pseudoClassName={"login__pseudo"}
          />
          <p className="text-center">
            <small>{`Enter your email and phone, and we'll send you a link to reset your password.`}</small>
          </p>
          <EmailInput handleEmailChange={handleEmailChange} />
          <PhoneInput handlePhoneChange={handlePhoneChange} />
          <p
            className="my-4 d-flex flex-column gap-1 text-black-50 fw-bold"
            style={{ fontSize: "65%" }}
          >
            <span>
              Select international country prefix and enter your phone number.
            </span>
            <span>For example select +233 and enter 231234567</span>
            <span>
              Phone number will be cleaned: spaces, brackets and dashes will be
              removed
            </span>
          </p>
          <div className="mt-5 mb-2 disabled">
            <SharedButton
              backgroundColor={buttonColor}
              buttonText={"Reset Password"}
              disabled={isDisabled}
              color={"white"}
            />
          </div>
          <div className="mb-4">
            <SharedButton
              backgroundColor="#ececec94"
              buttonText={"Back"}
              color={"black"}
              border={"1px solid lightgray"}
              className="back-button"
              link={"/log-in"}
              showButtonArrow={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
